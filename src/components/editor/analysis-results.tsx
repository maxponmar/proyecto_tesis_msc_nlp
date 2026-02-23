"use client";

import { motion } from "motion/react";
import { AnalysisScore } from "./analysis-score";
import type { AnalysisResult } from "@/lib/nlp/analysis";
import type { SectionThresholds } from "@/lib/nlp/constants";

interface AnalysisResultsProps {
  metrics: AnalysisResult;
  section: SectionThresholds;
}

export function AnalysisResults({ metrics, section }: AnalysisResultsProps) {
  return (
    <motion.div
      key={`${metrics.variety}-${metrics.density}-${metrics.sophistication}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>
          Palabras repetidas: <strong>{metrics.repeatedCount}</strong>
        </span>
        <span>
          Palabras comunes: <strong>{metrics.commonCount}</strong>
        </span>
        <span>
          Total palabras: <strong>{metrics.totalWords}</strong>
        </span>
      </div>

      <div className="space-y-4">
        <AnalysisScore
          name="Variedad"
          score={metrics.variety}
          limits={section.variety}
        />
        <AnalysisScore
          name="Densidad"
          score={metrics.density}
          limits={section.density}
        />
        <AnalysisScore
          name="Sofisticación"
          score={metrics.sophistication}
          limits={section.sophistication}
        />
      </div>
    </motion.div>
  );
}
