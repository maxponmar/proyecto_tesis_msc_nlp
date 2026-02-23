export type ObjectiveCategory = "QUE" | "COMO" | "PARAQUE";

export interface ObjectiveTag {
  /** Word index in the original text (0-based) */
  wordIndex: number;
  /** The category this word belongs to */
  category: ObjectiveCategory;
}

export interface ObjectiveResult {
  /** Original words from the text */
  words: string[];
  /** Tags for highlighted words only */
  tags: ObjectiveTag[];
}

const CATEGORIES: ObjectiveCategory[] = ["QUE", "COMO", "PARAQUE"];

/**
 * Parse BIO-tagged output from a single BERT model run.
 * Each line is "word label" where label is O, B-TAG, or I-TAG.
 * Returns indices of words that have the target tag.
 */
function parseBioTagged(raw: string, category: ObjectiveCategory): number[] {
  const lines = raw.trim().split("\n");
  const indices: number[] = [];
  let wordIndex = 0;

  for (let i = 0; i < lines.length; i++) {
    const parts = lines[i].trim().split(/\s+/);
    if (parts.length < 2) continue;
    const label = parts[parts.length - 1];
    if (label === `B-${category}` || label === `I-${category}`) {
      indices.push(wordIndex);
    }
    wordIndex++;
  }

  return indices;
}

/**
 * Extract words from any of the BIO outputs (they all contain the same words).
 */
function extractWords(raw: string): string[] {
  return raw
    .trim()
    .split("\n")
    .map((line) => {
      const parts = line.trim().split(/\s+/);
      return parts[0] ?? "";
    })
    .filter(Boolean);
}

/**
 * Parse the full BERT API response into a structured result.
 * Input: { QUE: "word1 O\nword2 B-QUE\n...", COMO: "...", PARAQUE: "..." }
 */
export function parseObjectiveResponse(
  response: Record<string, string>
): ObjectiveResult {
  // Use the first available output to extract words
  const firstKey = CATEGORIES.find((k) => response[k]);
  if (!firstKey) return { words: [], tags: [] };

  const words = extractWords(response[firstKey]);
  const tags: ObjectiveTag[] = [];

  for (const category of CATEGORIES) {
    if (!response[category]) continue;
    const indices = parseBioTagged(response[category], category);
    for (const idx of indices) {
      tags.push({ wordIndex: idx, category });
    }
  }

  return { words, tags };
}
