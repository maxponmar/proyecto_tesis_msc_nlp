import type { FreelingWord, FreelingApiResponse } from "@/types/nlp";

export interface FreelingParsedResult {
  original: string;
  words: FreelingWord[];
  wordGroups: Record<string, string[]>;
}

export function parseFreelingResponse(
  data: FreelingApiResponse
): FreelingParsedResult {
  const words: FreelingWord[] = [];

  for (const line of data.result.split("\n")) {
    const parts = line.trim().split(/\s+/);
    if (parts.length >= 3) {
      words.push({
        form: parts[0],
        lemma: parts[1],
        tag: parts[2],
        prob: parts[3] ? parseFloat(parts[3]) : 1,
      });
    }
  }

  return {
    original: data.original,
    words,
    wordGroups: data.wordGroups,
  };
}
