"use client";

import { useState, useEffect, useCallback } from "react";
import { useDebounce } from "use-debounce";
import { useWordCache } from "./use-word-cache";
import {
  buildDictionary,
  computeMetrics,
  type WordDictionary,
  type AnalysisResult,
} from "@/lib/nlp/analysis";
import { DEBOUNCE_MS, CHAR_LIMIT } from "@/lib/nlp/constants";
import { sileo } from "sileo";

export function useTextAnalysis(text: string, sectionSelected: boolean) {
  const [debouncedText] = useDebounce(text, DEBOUNCE_MS);
  const [analyzing, setAnalyzing] = useState(false);
  const [dictionary, setDictionary] = useState<WordDictionary>({});
  const [metrics, setMetrics] = useState<AnalysisResult | null>(null);
  const { saveWordGroups, filterNewWords, getBaseWordMap } = useWordCache();

  const analyze = useCallback(async () => {
    if (!debouncedText.trim() || !sectionSelected) return;

    if (debouncedText.length > CHAR_LIMIT) {
      sileo.error({ title: `El texto excede el límite de ${CHAR_LIMIT} caracteres`, fill: "#ed1c80" });
      setAnalyzing(false);
      return;
    }

    setAnalyzing(true);

    try {
      // Step 1: Filter out already-cached words
      const newWordsText = await filterNewWords(debouncedText.trim());

      // Step 2: Send only new words to FreeLing API
      if (newWordsText.length > 0) {
        const response = await fetch("/api/nlp/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: newWordsText }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.wordGroups) {
            await saveWordGroups(data.wordGroups);
          }
        }
      }

      // Step 3: Build dictionary using full text + cached base words
      const baseWordMap = await getBaseWordMap();
      const dict = buildDictionary(debouncedText, baseWordMap);
      setDictionary(dict);

      // Step 4: Compute metrics
      const result = computeMetrics(dict);
      setMetrics(result);
    } catch (error) {
      console.error("Analysis error:", error);
      sileo.error({ title: "Error al analizar el texto", fill: "#ed1c80" });
    } finally {
      setAnalyzing(false);
    }
  }, [debouncedText, sectionSelected, filterNewWords, saveWordGroups, getBaseWordMap]);

  useEffect(() => {
    if (debouncedText.trim() && sectionSelected) {
      analyze();
    }
  }, [debouncedText, sectionSelected, analyze]);

  return { analyzing, dictionary, metrics };
}
