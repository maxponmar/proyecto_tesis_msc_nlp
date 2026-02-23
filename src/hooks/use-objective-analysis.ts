"use client";

import { useState, useCallback } from "react";
import {
  parseObjectiveResponse,
  type ObjectiveResult,
} from "@/lib/nlp/objective-parser";
import { sileo } from "sileo";

export function useObjectiveAnalysis() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<ObjectiveResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyze = useCallback(async (text: string) => {
    if (!text.trim()) {
      sileo.error({ title: "Escribe un objetivo antes de analizar" });
      return;
    }

    setAnalyzing(true);
    setError(null);

    try {
      const response = await fetch("/api/nlp/objective", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text.trim() }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Error del servidor");
      }

      const data = await response.json();
      const parsed = parseObjectiveResponse(data);
      setResult(parsed);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error al analizar el objetivo";
      setError(message);
      sileo.error({ title: message });
    } finally {
      setAnalyzing(false);
    }
  }, []);

  const clear = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);

  return { analyzing, result, error, analyze, clear };
}
