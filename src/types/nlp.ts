export interface FreelingWord {
  form: string;
  lemma: string;
  tag: string;
  prob: number;
}

export interface FreelingAnalysisResponse {
  words: FreelingWord[];
  groups: WordGroup[];
  raw: string;
}

export interface WordGroup {
  type: string;
  words: string[];
}

export interface ObjectiveAnalysisResponse {
  que: string[];
  como: string[];
  paraque: string[];
  raw: string;
}

export interface LexicalMetrics {
  variety: number;
  density: number;
  sophistication: number;
}

export interface FreelingApiResponse {
  message: string;
  original: string;
  result: string;
  wordGroups: Record<string, string[]>;
}
