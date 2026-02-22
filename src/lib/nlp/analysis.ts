import { STOPWORDS, COMMON_WORDS } from "./constants";

export interface WordEntry {
  baseWord: string;
  count: number;
  isCommon: boolean;
  isStopword: boolean;
}

export type WordDictionary = Record<string, WordEntry>;

export interface AnalysisResult {
  variety: number;
  density: number;
  sophistication: number;
  repeatedCount: number;
  commonCount: number;
  totalWords: number;
  lexicalWords: number;
}

/**
 * Extract words from text (lowercase, only word characters).
 */
export function extractWords(text: string): string[] {
  const matches = text.toLowerCase().match(/[a-záéíóúüñ]+/gi);
  return matches || [];
}

/**
 * Build a word dictionary from text and a base word lookup map.
 * baseWordMap: maps inflected word -> base lemma (from FreeLing via IndexedDB)
 */
export function buildDictionary(
  text: string,
  baseWordMap: Record<string, string>
): WordDictionary {
  const words = extractWords(text);
  const dict: WordDictionary = {};

  for (const word of words) {
    const lower = word.toLowerCase();
    const base = baseWordMap[lower] || lower;

    if (!dict[lower]) {
      dict[lower] = {
        baseWord: base,
        count: 0,
        isCommon: COMMON_WORDS.has(base) || COMMON_WORDS.has(lower),
        isStopword: STOPWORDS.has(base) || STOPWORDS.has(lower),
      };
    }
    dict[lower].count++;
  }

  // Aggregate counts by base word (inflections share the same base)
  for (const key of Object.keys(dict)) {
    const base = dict[key].baseWord;
    let totalCount = 0;
    for (const k of Object.keys(dict)) {
      if (dict[k].baseWord === base) {
        totalCount += dict[k].count;
      }
    }
    dict[key].count = totalCount;
  }

  return dict;
}

/**
 * Compute lexical richness metrics from a word dictionary.
 */
export function computeMetrics(dict: WordDictionary): AnalysisResult {
  const entries = Object.values(dict);

  const totalWords = entries.reduce((sum, e) => sum + e.count, 0); // N
  const lexicalEntries = entries.filter((e) => !e.isStopword);
  const lexicalWords = lexicalEntries.reduce((sum, e) => sum + e.count, 0); // Nlex
  const uniqueLexical = lexicalEntries.length; // Tlex
  const sophisticatedEntries = lexicalEntries.filter((e) => !e.isCommon);
  const sophisticatedWords = sophisticatedEntries.reduce(
    (sum, e) => sum + e.count,
    0
  ); // Nslex

  const variety = lexicalWords > 0 ? uniqueLexical / lexicalWords : 0;
  const density = totalWords > 0 ? uniqueLexical / totalWords : 0;
  const sophistication = lexicalWords > 0 ? sophisticatedWords / lexicalWords : 0;

  const repeatedCount = lexicalEntries.filter((e) => e.count > 1).length;
  const commonCount = lexicalEntries.filter((e) => e.isCommon && e.count === 1).length;

  return {
    variety,
    density,
    sophistication,
    repeatedCount,
    commonCount,
    totalWords,
    lexicalWords,
  };
}

/**
 * Determine score status based on LSL/USL thresholds.
 */
export function getScoreStatus(
  score: number,
  limits: { LSL: number; USL: number }
): "good" | "medium" | "bad" {
  if (score >= limits.USL) return "good";
  if (score > limits.LSL) return "medium";
  return "bad";
}

/**
 * Simple Levenshtein distance for auto-save delta detection.
 */
export function levenshteinDistance(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      const cost = b.charAt(i - 1) === a.charAt(j - 1) ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[b.length][a.length];
}
