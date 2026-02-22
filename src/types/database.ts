export interface Profile {
  id: string;
  full_name: string | null;
  created_at: string;
}

export interface Document {
  id: string;
  user_id: string;
  title: string;
  content: string;
  analysis_results: AnalysisResults | null;
  created_at: string;
  updated_at: string;
}

export interface AnalysisResults {
  scores: AnalysisScore[];
  option: AnalysisOption;
}

export interface AnalysisScore {
  name: string;
  score: number;
  description: string;
}

export interface AnalysisOption {
  label: string;
  lsl: number;
  usl: number;
}

export interface Survey {
  id: string;
  title: string;
  questions: SurveyQuestion[];
  created_at: string;
}

export interface SurveyQuestion {
  id: string;
  question: string;
  type: "range" | "open";
  range?: { min: number; max: number };
}

export interface SurveyResponse {
  id: string;
  survey_id: string;
  user_id: string;
  responses: { question_id: string; answer: string | number }[];
  created_at: string;
}
