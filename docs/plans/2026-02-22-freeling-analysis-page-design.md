# FreeLing Analysis Page — Design

**Date:** 2026-02-22
**Status:** Approved

## Overview

A standalone FreeLing morphological analysis page where users enter text and see results in a translator-style two-panel layout with interactive word linking. Hovering a word in either panel highlights its counterpart. Results are exportable as Excel.

## Page Flow

1. User enters text in a textarea and clicks "Analizar"
2. API call to `/api/nlp/analyze` returns `{ result, wordGroups, original }`
3. Two panels appear side-by-side:
   - **Left**: Original text rendered as hoverable word tokens
   - **Right**: FreeLing results in a 4-column table (Palabra, Lema, Categoría Gramatical, Probabilidad)
4. User can hover/click words to cross-highlight between panels
5. User can download results as Excel (2 sheets) or clear to start over

## Layout

```
┌─────────────────────────────────────────────────────┐
│  Análisis FreeLing                                  │
│  [textarea for input]                               │
│  [Analizar button]                                  │
├────────────────────────┬────────────────────────────┤
│   TEXTO ORIGINAL       │   RESULTADOS FREELING      │
│                        │                            │
│  word₁ word₂ word₃    │  Palabra │Lema│POS│Prob    │
│  word₄ word₅ ...      │  word₁   │... │.. │0.99    │
│                        │  word₂   │... │.. │1.00    │
│  (hoverable tokens)    │  (hoverable rows)          │
├────────────────────────┴────────────────────────────┤
│  [Descargar Excel]  [Limpiar]                       │
└─────────────────────────────────────────────────────┘
```

Mobile: panels stack vertically (text on top, table below).

## Interactive Word Linking (Approach A — Shared Highlight State)

- State: `hoveredWord: string | null` (lowercased raw word)
- Left panel word tokens: `<span>` with `onMouseEnter`/`onMouseLeave`
- Right panel table rows: same handlers
- Matching elements get a highlight class (background color pulse, ~150ms CSS transition)
- Multiple table rows can match the same word — all highlight
- **Click locks** the highlight (mobile-friendly), click again or click elsewhere unlocks

## Excel Export

Add `xlsx` (SheetJS) package. Two sheets:
1. **"Texto Original"** — single cell with full input text
2. **"Resultados FreeLing"** — 4-column table: Palabra, Lema, Categoría Gramatical, Probabilidad

## Components & Hook

```
src/app/(dashboard)/freeling/page.tsx         — Page (state, layout)

src/components/freeling/
  freeling-input.tsx          — Textarea + analyze button
  freeling-word-display.tsx   — Left panel: clickable word tokens
  freeling-results-table.tsx  — Right panel: shadcn Table with hover
  freeling-export-button.tsx  — Excel download button

src/hooks/
  use-freeling-analysis.ts    — Hook: calls /api/nlp/analyze, returns {analyzing, result, error, analyze, clear}
```

## API Response Shape (reference)

```json
{
  "message": "Text analyzed successfully",
  "original": "el estudiante analiza ...",
  "result": "el el DA0MS0 0.972\nestudiante estudiante NCMS000 1.000\n...",
  "wordGroups": { "el": ["el"], "estudiante": ["estudiante"], "analizar": ["analiza"] }
}
```

Each line in `result`: `raw_word lemma POS_tag probability`

## Dependencies

- **New**: `xlsx` (SheetJS) for Excel export
- **Existing**: shadcn/ui Table, Button, Textarea; motion for animations; lucide-react for icons
