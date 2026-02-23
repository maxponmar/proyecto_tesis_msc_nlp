# FreeLing Analysis Page — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a FreeLing morphological analysis page with translator-style interactive word linking and Excel export.

**Architecture:** Textarea input → API call to `/api/nlp/analyze` → two-panel display (word tokens + results table) with shared hover state for bidirectional highlighting. Excel export via `xlsx` (SheetJS).

**Tech Stack:** Next.js App Router, React, shadcn/ui (Table, Button, Textarea), motion (animations), xlsx (Excel), Tailwind CSS v4.

---

### Task 1: Install xlsx dependency

**Files:**
- Modify: `package.json`

**Step 1: Install xlsx**

Run: `pnpm add xlsx`

**Step 2: Verify**

Run: `pnpm build` (should still pass)

**Step 3: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: add xlsx dependency for Excel export"
```

---

### Task 2: FreeLing analysis hook + response parser

**Files:**
- Create: `src/lib/nlp/freeling-parser.ts`
- Create: `src/hooks/use-freeling-analysis.ts`
- Modify: `src/types/nlp.ts` (update types to match actual API response)

**Step 1: Update types in `src/types/nlp.ts`**

The existing `FreelingWord` type is fine. Add a raw API response type:

```typescript
export interface FreelingApiResponse {
  message: string;
  original: string;
  result: string;
  wordGroups: Record<string, string[]>;
}
```

**Step 2: Create `src/lib/nlp/freeling-parser.ts`**

Parses the raw `result` string into `FreelingWord[]`. Each line format: `raw_word lemma POS_tag probability`.

```typescript
import type { FreelingWord, FreelingApiResponse } from "@/types/nlp";

export interface FreelingParsedResult {
  original: string;
  words: FreelingWord[];
  wordGroups: Record<string, string[]>;
}

export function parseFreelingResponse(
  data: FreelingApiResponse
): FreelingParsedResult {
  const words: FreelingWord[] = [];

  for (const line of data.result.split("\n")) {
    const parts = line.trim().split(/\s+/);
    if (parts.length >= 3) {
      words.push({
        form: parts[0],
        lemma: parts[1],
        tag: parts[2],
        prob: parts[3] ? parseFloat(parts[3]) : 1,
      });
    }
  }

  return {
    original: data.original,
    words,
    wordGroups: data.wordGroups,
  };
}
```

**Step 3: Create `src/hooks/use-freeling-analysis.ts`**

Follow the exact same pattern as `use-objective-analysis.ts`:

```typescript
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
```

**Step 4: Verify**

Run: `pnpm build`

**Step 5: Commit**

```bash
git add src/types/nlp.ts src/lib/nlp/freeling-parser.ts src/hooks/use-freeling-analysis.ts
git commit -m "feat: add FreeLing analysis hook and response parser"
```

---

### Task 3: FreeLing input component

**Files:**
- Create: `src/components/freeling/freeling-input.tsx`

**Step 1: Create the component**

A textarea + submit button. Calls `onAnalyze(text)` on submit. Disabled during analysis.

```typescript
"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface FreelingInputProps {
  onAnalyze: (text: string) => void;
  analyzing: boolean;
  disabled?: boolean;
}

export function FreelingInput({
  onAnalyze,
  analyzing,
  disabled,
}: FreelingInputProps) {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAnalyze(text);
      }}
      className="space-y-3"
    >
      <Textarea
        placeholder="Escribe o pega un texto para analizar con FreeLing..."
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={analyzing || disabled}
      />
      <Button type="submit" disabled={analyzing || disabled || !text.trim()}>
        {analyzing ? "Analizando..." : "Analizar con FreeLing"}
      </Button>
    </form>
  );
}
```

**Step 2: Verify**

Run: `pnpm build`

**Step 3: Commit**

```bash
git add src/components/freeling/freeling-input.tsx
git commit -m "feat: add FreeLing text input component"
```

---

### Task 4: Word display component (left panel)

**Files:**
- Create: `src/components/freeling/freeling-word-display.tsx`

**Step 1: Create the component**

Renders the original text as individual hoverable/clickable word tokens. Each token sets/clears `hoveredWord`. Highlights when its word matches the current `hoveredWord`.

```typescript
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
```

**Step 2: Verify**

Run: `pnpm build`

**Step 3: Commit**

```bash
git add src/components/freeling/freeling-word-display.tsx
git commit -m "feat: add FreeLing word display with hover highlighting"
```

---

### Task 5: Results table component (right panel)

**Files:**
- Create: `src/components/freeling/freeling-results-table.tsx`

**Step 1: Create the component**

Uses shadcn Table. Rows highlight when their `form` matches `hoveredWord`. Rows also set/clear `hoveredWord` on hover/click.

```typescript
"use client";

import { useRef, useEffect } from "react";
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

  let firstMatchFound = false;

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
              const isFirstMatch = isActive && !firstMatchFound;
              if (isFirstMatch) firstMatchFound = true;

              return (
                <TableRow
                  key={i}
                  ref={isFirstMatch ? activeRowRef : undefined}
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
```

**Step 2: Verify**

Run: `pnpm build`

**Step 3: Commit**

```bash
git add src/components/freeling/freeling-results-table.tsx
git commit -m "feat: add FreeLing results table with hover highlighting"
```

---

### Task 6: Excel export component

**Files:**
- Create: `src/components/freeling/freeling-export-button.tsx`

**Step 1: Create the component**

Uses `xlsx` to create a workbook with two sheets: "Texto Original" (single cell) and "Resultados FreeLing" (4-column table).

```typescript
"use client";

import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { FreelingWord } from "@/types/nlp";
import * as XLSX from "xlsx";

interface FreelingExportButtonProps {
  original: string;
  words: FreelingWord[];
}

export function FreelingExportButton({
  original,
  words,
}: FreelingExportButtonProps) {
  const handleExport = useCallback(() => {
    const wb = XLSX.utils.book_new();

    // Sheet 1: Original text
    const ws1 = XLSX.utils.aoa_to_sheet([["Texto original"], [original]]);
    ws1["!cols"] = [{ wch: 80 }];
    XLSX.utils.book_append_sheet(wb, ws1, "Texto Original");

    // Sheet 2: FreeLing results
    const headers = ["Palabra", "Lema", "Categoría Gramatical", "Probabilidad"];
    const rows = words.map((w) => [w.form, w.lemma, w.tag, w.prob]);
    const ws2 = XLSX.utils.aoa_to_sheet([headers, ...rows]);
    ws2["!cols"] = [{ wch: 20 }, { wch: 20 }, { wch: 15 }, { wch: 12 }];
    XLSX.utils.book_append_sheet(wb, ws2, "Resultados FreeLing");

    XLSX.writeFile(wb, "freeling-resultado.xlsx");
  }, [original, words]);

  return (
    <Button variant="outline" onClick={handleExport}>
      <Download className="mr-2 h-4 w-4" />
      Descargar Excel
    </Button>
  );
}
```

**Step 2: Verify**

Run: `pnpm build`

**Step 3: Commit**

```bash
git add src/components/freeling/freeling-export-button.tsx
git commit -m "feat: add FreeLing Excel export with two sheets"
```

---

### Task 7: Assemble FreeLing page

**Files:**
- Modify: `src/app/(dashboard)/freeling/page.tsx`

**Step 1: Build the page**

Replaces the stub with the full implementation. Manages `hoveredWord` and `lockedWord` state. Uses `useFreelingStatus` to check service health, `useFreelingAnalysis` for the API call.

```typescript
"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useFreelingStatus } from "@/hooks/use-freeling-status";
import { useFreelingAnalysis } from "@/hooks/use-freeling-analysis";
import { FreelingInput } from "@/components/freeling/freeling-input";
import { FreelingWordDisplay } from "@/components/freeling/freeling-word-display";
import { FreelingResultsTable } from "@/components/freeling/freeling-results-table";
import { FreelingExportButton } from "@/components/freeling/freeling-export-button";
import { Button } from "@/components/ui/button";

export default function FreelingPage() {
  const { status, ready } = useFreelingStatus();
  const { analyzing, result, analyze, clear } = useFreelingAnalysis();
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);
  const [lockedWord, setLockedWord] = useState<string | null>(null);

  const handleClickWord = useCallback(
    (word: string) => {
      setLockedWord((prev) => (prev === word ? null : word));
    },
    []
  );

  const handleClear = useCallback(() => {
    clear();
    setHoveredWord(null);
    setLockedWord(null);
  }, [clear]);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl font-bold">Análisis FreeLing</h2>
        <p className="text-sm text-muted-foreground">
          Ingresa un texto para obtener el análisis morfológico con FreeLing.
          {status === "connecting" && " Conectando al servicio..."}
          {status === "starting" && " Iniciando servicio de análisis..."}
          {status === "error" &&
            " El servicio de análisis no está disponible."}
        </p>
      </motion.div>

      {!result && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <FreelingInput
            onAnalyze={analyze}
            analyzing={analyzing}
            disabled={!ready}
          />
        </motion.div>
      )}

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <FreelingWordDisplay
                text={result.original}
                hoveredWord={hoveredWord}
                lockedWord={lockedWord}
                onHoverWord={setHoveredWord}
                onClickWord={handleClickWord}
              />
              <FreelingResultsTable
                words={result.words}
                hoveredWord={hoveredWord}
                lockedWord={lockedWord}
                onHoverWord={setHoveredWord}
                onClickWord={handleClickWord}
              />
            </div>
            <div className="flex items-center gap-2">
              <FreelingExportButton
                original={result.original}
                words={result.words}
              />
              <Button variant="outline" onClick={handleClear}>
                Limpiar
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

**Step 2: Verify**

Run: `pnpm build`

**Step 3: Commit**

```bash
git add src/app/(dashboard)/freeling/page.tsx
git commit -m "feat: implement FreeLing analysis page with interactive word linking"
```

---

### Task 8: Final verification

**Step 1:** Run `pnpm build` — should pass

**Step 2:** Run `pnpm lint` — fix any issues

**Step 3:** Manual checklist (dev server):
- Enter text, click Analizar → results appear
- Hover word in left panel → table row highlights
- Hover row in table → word in left panel highlights
- Click a word → highlight locks; click again → unlocks
- Click "Descargar Excel" → downloads .xlsx with 2 sheets
- Click "Limpiar" → returns to input state
- Mobile responsive: panels stack vertically
