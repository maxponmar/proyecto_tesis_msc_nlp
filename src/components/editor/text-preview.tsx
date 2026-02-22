"use client";

import { extractWords } from "@/lib/nlp/analysis";
import type { WordDictionary } from "@/lib/nlp/analysis";
import { Label } from "@/components/ui/label";

interface TextPreviewProps {
  text: string;
  dictionary: WordDictionary;
}

export function TextPreview({ text, dictionary }: TextPreviewProps) {
  const words = extractWords(text);

  // Track which words we've already seen (for "first occurrence" logic)
  const seen = new Set<string>();

  return (
    <div className="space-y-2">
      <Label>Vista previa</Label>
      <div className="rounded-md border bg-muted/50 p-4 leading-relaxed">
        {words.map((word, i) => {
          const lower = word.toLowerCase();
          const entry = dictionary[lower];

          let className = "";

          if (entry && !entry.isStopword) {
            if (entry.count > 1) {
              // Repeated word — red
              className = "text-red-600 font-semibold";
            } else if (entry.isCommon && !seen.has(lower)) {
              // Common word, first occurrence — yellow + bold
              className = "text-yellow-600 font-bold";
            }
          }

          seen.add(lower);

          return (
            <span key={i}>
              {i > 0 && " "}
              <span className={className}>{word}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
