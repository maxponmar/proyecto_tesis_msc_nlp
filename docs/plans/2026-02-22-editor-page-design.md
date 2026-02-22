# Editor Page Design

**Date:** 2026-02-22
**Status:** Approved

## Overview

Rebuild the lexical richness analysis editor (SimpleEditor) as a Next.js client component with custom hooks. Plain textarea input, highlighted text preview, real-time metric computation, and auto-save to Supabase.

## Decisions

- **Input:** Plain textarea (same as old app) with highlighted preview below
- **Word cache:** IndexedDB for FreeLing word lemma caching (only new words sent to API)
- **Character limit:** 800 characters
- **Architecture:** Monolithic client component with extracted custom hooks
- **Save target:** Supabase `documents` table (replaces Appwrite)

## Component Architecture

```
src/app/(dashboard)/editor/page.tsx          # Page shell (client component)
src/components/editor/text-input.tsx          # Textarea + char counter
src/components/editor/text-preview.tsx        # Highlighted text display
src/components/editor/analysis-results.tsx    # Metrics display (3 scores)
src/components/editor/analysis-score.tsx      # Single metric bar + feedback
src/components/editor/section-selector.tsx    # Academic section dropdown
src/hooks/use-text-analysis.ts               # Core analysis pipeline hook
src/hooks/use-word-cache.ts                  # IndexedDB cache operations
src/hooks/use-auto-save.ts                   # Auto-save to Supabase
src/lib/nlp/analysis.ts                      # Pure functions: metrics, highlighting
src/lib/nlp/constants.ts                     # Thresholds, stopwords, common words, feedbacks
```

## Data Flow

```
User types in <TextInput>
    | onChange -> setState
1s debounce (use-debounce)
    |
useWordCache: filter out known words (IndexedDB)
    |
fetch("/api/nlp/analyze") with new words only
    |
useWordCache: save wordGroups to IndexedDB
    |
useTextAnalysis: build dictionary from text + cache
    |
useTextAnalysis: compute metrics (Variety, Density, Sophistication)
    |
<TextPreview>: highlighted text (red=repeated, yellow=common)
<AnalysisResults>: 3 score bars + feedback messages
    |
useAutoSave: save to Supabase every 10 min or manual
```

## Lexical Metrics

**Input variables:**
- N = Total word count
- Nlex = Non-stopword count (lexical words)
- Tlex = Unique non-stopword count (type count)
- Nslex = Sophisticated non-stopword count (non-common words)

**Formulas:**
- Variety = Tlex / Nlex (lexical type-token ratio)
- Density = Tlex / N (proportion of lexical words)
- Sophistication = Nslex / Nlex (proportion of non-common words)

## Section Thresholds (LSL/USL)

7 academic sections with calibrated thresholds:

| Section | Variety | Density | Sophistication |
|---------|---------|---------|----------------|
| HIPOTESIS | 0.89-0.99 | 0.52-0.66 | 0.52-0.72 |
| JUSTIFICACION | 0.60-0.76 | 0.53-0.60 | 0.53-0.63 |
| OBJETIVOS | 0.85-0.99 | 0.56-0.72 | 0.56-0.75 |
| PLANTEAMIENTO DEL PROBLEMA | 0.56-0.70 | 0.56-0.63 | 0.54-0.67 |
| PREGUNTAS DE INVESTIGACION | 0.89-1.00 | 0.60-0.74 | 0.58-0.77 |
| METODOLOGIA | 0.52-0.65 | 0.49-0.62 | 0.56-0.71 |
| CONCLUSIONES | 0.55-0.65 | 0.55-0.58 | 0.55-0.61 |

## Score Color Coding

- score <= LSL: RED (bad)
- LSL < score < USL: YELLOW (medium)
- score >= USL: GREEN (good)

## Word Highlighting

- RED text: word repeated 2+ times (contador > 1)
- YELLOW + BOLD: common word, not repeated (first occurrence)
- Normal: stopword or sophisticated word

## Auto-Save

- Automatic: every 10 minutes
- Manual: "Guardar" button
- Condition: Levenshtein distance > 30 chars from last save
- Status display: "Guardado hace X minutos"
- Storage: Supabase `documents` table with title, content, analysis_results JSONB

## UI Layout

```
+----------------------------------------------+
| [Section Selector v]     [Guardar] Guardado   |
|                           hace 2 min          |
+----------------------------------------------+
| Titulo: [___________________________________] |
+----------------------------------------------+
| Textarea (800 chars max)                      |
| [___________________________________________] |
|                              750/800 chars    |
+----------------------------------------------+
| Vista previa:                                 |
| word word WORD word WORD word word            |
+----------------------------------------------+
| Resultados:                                   |
| Palabras repetidas: 5 | Palabras comunes: 8  |
|                                               |
| Variedad     ========-- 82%  Good            |
| Densidad     ======---- 58%  Medium          |
| Sofisticacion =====----- 48%  Bad            |
+----------------------------------------------+
```
