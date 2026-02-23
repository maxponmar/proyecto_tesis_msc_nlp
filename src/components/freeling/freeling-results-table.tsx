"use client";

import { useRef, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import type { FreelingWord } from "@/types/nlp";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface FreelingResultsTableProps {
  words: FreelingWord[];
  hoveredWord: string | null;
  lockedWord: string | null;
  onHoverWord: (word: string | null) => void;
  onClickWord: (word: string) => void;
}

export function FreelingResultsTable({
  words,
  hoveredWord,
  lockedWord,
  onHoverWord,
  onClickWord,
}: FreelingResultsTableProps) {
  const activeWord = lockedWord ?? hoveredWord;
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRowRef = useRef<HTMLTableRowElement>(null);

  // Auto-scroll to first matching row when activeWord changes
  useEffect(() => {
    if (activeWord && activeRowRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const row = activeRowRef.current;
      const containerRect = container.getBoundingClientRect();
      const rowRect = row.getBoundingClientRect();

      if (
        rowRect.top < containerRect.top ||
        rowRect.bottom > containerRect.bottom
      ) {
        row.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [activeWord]);

  const firstMatchIndex = useMemo(
    () => (activeWord ? words.findIndex((w) => w.form === activeWord) : -1),
    [activeWord, words]
  );

  return (
    <div className="rounded-lg border">
      <h3 className="text-sm font-medium text-muted-foreground p-4 pb-0">
        Resultados FreeLing
      </h3>
      <div ref={scrollRef} className="max-h-[400px] overflow-y-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Palabra</TableHead>
              <TableHead>Lema</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead className="text-right">Prob.</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {words.map((word, i) => {
              const isActive = activeWord === word.form;

              return (
                <TableRow
                  key={i}
                  ref={i === firstMatchIndex ? activeRowRef : undefined}
                  className={cn(
                    "cursor-pointer transition-colors duration-150",
                    isActive && "bg-primary/20"
                  )}
                  onMouseEnter={() => onHoverWord(word.form)}
                  onMouseLeave={() => onHoverWord(null)}
                  onClick={() => onClickWord(word.form)}
                >
                  <TableCell className="font-medium">{word.form}</TableCell>
                  <TableCell>{word.lemma}</TableCell>
                  <TableCell>
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                      {word.tag}
                    </code>
                  </TableCell>
                  <TableCell className="text-right">
                    {word.prob.toFixed(3)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
