"use client";

import { cn } from "@/lib/utils";

interface FreelingWordDisplayProps {
  text: string;
  hoveredWord: string | null;
  lockedWord: string | null;
  onHoverWord: (word: string | null) => void;
  onClickWord: (word: string) => void;
}

export function FreelingWordDisplay({
  text,
  hoveredWord,
  lockedWord,
  onHoverWord,
  onClickWord,
}: FreelingWordDisplayProps) {
  const activeWord = lockedWord ?? hoveredWord;
  const tokens = text.split(/(\s+)/);

  return (
    <div className="rounded-lg border bg-muted/30 p-4 min-h-[120px]">
      <h3 className="text-sm font-medium text-muted-foreground mb-3">
        Texto original
      </h3>
      <div className="leading-relaxed text-base">
        {tokens.map((token, i) => {
          if (/^\s+$/.test(token)) {
            return <span key={i}>{token}</span>;
          }

          const normalized = token.toLowerCase();
          const isActive = activeWord === normalized;

          return (
            <span
              key={i}
              className={cn(
                "cursor-pointer rounded px-0.5 transition-colors duration-150",
                isActive
                  ? "bg-primary/20 text-primary font-medium"
                  : "hover:bg-muted"
              )}
              onMouseEnter={() => onHoverWord(normalized)}
              onMouseLeave={() => onHoverWord(null)}
              onClick={() => onClickWord(normalized)}
            >
              {token}
            </span>
          );
        })}
      </div>
    </div>
  );
}
