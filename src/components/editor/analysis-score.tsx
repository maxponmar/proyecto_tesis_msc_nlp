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

  // Get random feedback message for this status and metric
  const feedbackKey = name as keyof (typeof FEEDBACKS)[string];
  const messages = FEEDBACKS[status]?.[feedbackKey] ?? [];
  const feedback = useMemo(() => {
    if (messages.length === 0) return "";
    return messages[Math.floor(Math.random() * messages.length)];
  }, [messages]);

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
