"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { levenshteinDistance } from "@/lib/nlp/analysis";
import { AUTO_SAVE_INTERVAL_MS, SAVE_THRESHOLD } from "@/lib/nlp/constants";
import type { AnalysisResult } from "@/lib/nlp/analysis";
import type { SectionThresholds } from "@/lib/nlp/constants";
import { sileo } from "sileo";

export function useAutoSave(
  title: string,
  content: string,
  metrics: AnalysisResult | null,
  selectedSection: SectionThresholds | null
) {
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
  const [saveStatus, setSaveStatus] = useState<string>("");
  const [saving, setSaving] = useState(false);
  const lastSavedContent = useRef("");
  const documentId = useRef<string | null>(null);
  const supabase = createClient();

  const save = useCallback(
    async (manual = false) => {
      if (!content.trim() || !title.trim()) {
        if (manual) sileo.error({ title: "No hay texto o título para guardar" });
        return;
      }

      // Check if content changed enough
      const distance = levenshteinDistance(content, lastSavedContent.current);
      if (!manual && distance <= SAVE_THRESHOLD) return;

      setSaving(true);

      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!user) {
          sileo.error({ title: "Sesión expirada, inicia sesión nuevamente" });
          return;
        }

        const analysisResults = metrics
          ? {
              scores: [
                { name: "Variedad", score: metrics.variety, description: "Diversidad de palabras" },
                { name: "Densidad", score: metrics.density, description: "Proporción de palabras léxicas" },
                { name: "Sofisticación", score: metrics.sophistication, description: "Uso de vocabulario avanzado" },
              ],
              option: selectedSection
                ? { label: selectedSection.section, lsl: 0, usl: 0 }
                : null,
            }
          : null;

        if (documentId.current) {
          // Update existing document
          const { error } = await supabase
            .from("documents")
            .update({
              title,
              content,
              analysis_results: analysisResults,
              updated_at: new Date().toISOString(),
            })
            .eq("id", documentId.current);

          if (error) throw error;
        } else {
          // Create new document
          const { data, error } = await supabase
            .from("documents")
            .insert({
              user_id: user.id,
              title,
              content,
              analysis_results: analysisResults,
            })
            .select("id")
            .single();

          if (error) throw error;
          documentId.current = data.id;
        }

        lastSavedContent.current = content;
        setLastSavedAt(new Date());
        if (manual) sileo.success({ title: "Guardado exitosamente" });
      } catch (error) {
        console.error("Save error:", error);
        sileo.error({ title: "Error al guardar" });
      } finally {
        setSaving(false);
      }
    },
    [content, title, metrics, selectedSection, supabase]
  );

  // Auto-save every 10 minutes
  useEffect(() => {
    const interval = setInterval(() => save(false), AUTO_SAVE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [save]);

  // Update save status display
  useEffect(() => {
    if (!lastSavedAt) {
      setSaveStatus("");
      return;
    }

    const updateStatus = () => {
      const now = new Date();
      const diffMs = now.getTime() - lastSavedAt.getTime();
      const minutes = Math.floor(diffMs / 60000);

      if (minutes < 1) {
        setSaveStatus("Guardado hace menos de 1 minuto");
      } else if (minutes === 1) {
        setSaveStatus("Guardado hace 1 minuto");
      } else {
        setSaveStatus(`Guardado hace ${minutes} minutos`);
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, [lastSavedAt]);

  const manualSave = useCallback(() => save(true), [save]);

  return { saveStatus, saving, manualSave };
}
