"use client";

import { useState, useCallback } from "react";
import {
  parseFreelingResponse,
  type FreelingParsedResult,
} from "@/lib/nlp/freeling-parser";
import { sileo } from "sileo";

export function useFreelingAnalysis() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<FreelingParsedResult | null>(null);

  const analyze = useCallback(async (text: string) => {
    if (!text.trim()) {
      sileo.error({ title: "Escribe un texto antes de analizar" });
      return;
    }

    setAnalyzing(true);

    try {
      const response = await fetch("/api/nlp/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text.trim() }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Error del servidor");
      }

      const data = await response.json();
      const parsed = parseFreelingResponse(data);
      setResult(parsed);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error al analizar el texto";
      sileo.error({ title: message });
    } finally {
      setAnalyzing(false);
    }
  }, []);

  const clear = useCallback(() => {
    setResult(null);
  }, []);

  return { analyzing, result, analyze, clear };
}
