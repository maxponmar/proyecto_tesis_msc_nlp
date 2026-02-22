"use client";

import { useMemo } from "react";
import { getScoreStatus } from "@/lib/nlp/analysis";
import { FEEDBACKS } from "@/lib/nlp/constants";
import { cn } from "@/lib/utils";

interface AnalysisScoreProps {
  name: string;
  score: number;
  limits: { LSL: number; USL: number };
}

export function AnalysisScore({ name, score, limits }: AnalysisScoreProps) {
  const status = getScoreStatus(score, limits);
  const percentage = Math.min(Math.round(score * 100), 100);

  const statusColors = {
    good: "bg-green-500",
    medium: "bg-yellow-500",
    bad: "bg-red-500",
  };

  const statusLabels = {
    good: "Bueno",
    medium: "Regular",
    bad: "Bajo",
  };

  // Pick a deterministic feedback message based on score + name
  const feedback = useMemo(() => {
    const feedbackKey = name as keyof (typeof FEEDBACKS)[string];
    const msgs = FEEDBACKS[status]?.[feedbackKey] ?? [];
    if (msgs.length === 0) return "";
    // Use a simple hash of score to pick a stable index (no Math.random)
    const index = Math.abs(Math.round(score * 1000)) % msgs.length;
    return msgs[index];
  }, [name, status, score]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">
          {percentage}% &mdash; {statusLabels[status]}
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted">
        <div
          className={cn(
            "h-full rounded-full transition-all",
            statusColors[status]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {feedback && (
        <p className="text-xs text-muted-foreground">{feedback}</p>
      )}
    </div>
  );
}
