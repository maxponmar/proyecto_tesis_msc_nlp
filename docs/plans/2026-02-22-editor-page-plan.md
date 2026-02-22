# Editor Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the lexical richness analysis editor page — the core feature of RetmeePro.

**Architecture:** A client-side page component with three custom hooks (useTextAnalysis, useWordCache, useAutoSave) that orchestrate a pipeline: user input → debounce → IndexedDB filtering → FreeLing API → dictionary building → metric computation → highlighted preview + score display. Saves to Supabase.

**Tech Stack:** Next.js 16 client components, use-debounce, IndexedDB, Supabase JS client, shadcn/ui

**Design doc:** `docs/plans/2026-02-22-editor-page-design.md`

---

## Task 1: Install use-debounce and create NLP constants

**Files:**
- Create: `src/lib/nlp/constants.ts`

**Step 1: Install use-debounce**

```bash
cd /Users/maximiliano/Repositories/Freelance/retmeepro
pnpm add use-debounce
```

**Step 2: Copy lexical data files from old project**

Copy the JSON data files as-is:

```bash
cp oldversion/FrontEnd/Plataforma_NLP.ReactUI/src/assets/lexical/stopwords.json src/lib/nlp/stopwords.json
cp oldversion/FrontEnd/Plataforma_NLP.ReactUI/src/assets/lexical/commonwords.json src/lib/nlp/commonwords.json
```

**Step 3: Create constants file — `src/lib/nlp/constants.ts`**

```typescript
import stopwordsData from "./stopwords.json";
import commonwordsData from "./commonwords.json";

export const STOPWORDS = new Set(stopwordsData as string[]);
export const COMMON_WORDS = new Set(commonwordsData as string[]);

export const CHAR_LIMIT = 800;
export const DEBOUNCE_MS = 1000;
export const AUTO_SAVE_INTERVAL_MS = 600000; // 10 minutes
export const SAVE_THRESHOLD = 30; // Levenshtein distance threshold

export interface SectionThresholds {
  section: string;
  density: { LSL: number; USL: number };
  sophistication: { LSL: number; USL: number };
  variety: { LSL: number; USL: number };
}

export const SECTION_THRESHOLDS: SectionThresholds[] = [
  {
    section: "HIPOTESIS",
    density: { LSL: 0.5235, USL: 0.6603 },
    sophistication: { LSL: 0.5167, USL: 0.7211 },
    variety: { LSL: 0.8881, USL: 0.9855 },
  },
  {
    section: "JUSTIFICACION",
    density: { LSL: 0.5347, USL: 0.6013 },
    sophistication: { LSL: 0.5326, USL: 0.6326 },
    variety: { LSL: 0.5968, USL: 0.761 },
  },
  {
    section: "OBJETIVOS",
    density: { LSL: 0.5569, USL: 0.7193 },
    sophistication: { LSL: 0.5577, USL: 0.7535 },
    variety: { LSL: 0.8516, USL: 0.9858 },
  },
  {
    section: "PLANTEAMIENTO DEL PROBLEMA",
    density: { LSL: 0.5585, USL: 0.6293 },
    sophistication: { LSL: 0.5384, USL: 0.6668 },
    variety: { LSL: 0.5571, USL: 0.7047 },
  },
  {
    section: "PREGUNTAS DE INVESTIGACION",
    density: { LSL: 0.6043, USL: 0.7443 },
    sophistication: { LSL: 0.5766, USL: 0.7742 },
    variety: { LSL: 0.8885, USL: 1 },
  },
  {
    section: "METODOLOGIA",
    density: { LSL: 0.49, USL: 0.6195 },
    sophistication: { LSL: 0.5601, USL: 0.7141 },
    variety: { LSL: 0.5211, USL: 0.6508 },
  },
  {
    section: "CONCLUSIONES",
    density: { LSL: 0.5536, USL: 0.5843 },
    sophistication: { LSL: 0.5504, USL: 0.6062 },
    variety: { LSL: 0.5537, USL: 0.6477 },
  },
];

export interface FeedbackMessages {
  [status: string]: {
    [metric: string]: string[];
  };
}

export const FEEDBACKS: FeedbackMessages = {
  good: {
    "Sofisticación": [
      "Tu uso del lenguaje muestra una gran sofisticación. Has empleado términos y estructuras complejas de manera efectiva, lo que demuestra un alto nivel de habilidad lingüística.",
      "Impresionante nivel de sofisticación lingüística. Has demostrado un dominio excepcional del idioma al utilizar términos y estructuras complejas de manera fluida y natural.",
      "Tu habilidad para expresarte de manera sofisticada es admirable. Has mostrado un dominio excepcional del lenguaje al utilizar un vocabulario variado y estructuras elaboradas.",
      "Felicidades por tu excelente manejo del lenguaje. Tu sofisticación lingüística es evidente en tu capacidad para comunicar ideas de manera clara y precisa utilizando un vocabulario rico y diverso.",
      "Has demostrado un alto nivel de sofisticación en tu uso del lenguaje. Tu habilidad para utilizar términos y estructuras complejas enriquece tu comunicación y demuestra un dominio impresionante del idioma.",
    ],
    Densidad: [
      "La densidad de tu lenguaje es notable. Has logrado transmitir ideas complejas de manera concisa y precisa, utilizando un vocabulario rico y variado.",
      "Impresionante nivel de densidad lingüística. Has sido capaz de comunicar ideas complejas de manera efectiva en un espacio limitado, demostrando un alto grado de precisión y concisión.",
      "Tu capacidad para transmitir ideas de manera densa es destacable. Has utilizado un vocabulario variado y preciso para comunicar conceptos complejos de manera clara y concisa.",
      "Felicidades por tu habilidad para comunicar de manera densa y precisa. Has logrado transmitir información compleja de manera efectiva, utilizando un lenguaje claro y conciso.",
      "Has demostrado una gran habilidad para comunicarte de manera densa. Tu capacidad para transmitir información compleja de manera concisa y precisa es impresionante.",
    ],
    Variedad: [
      "Tu uso variado del lenguaje es impresionante. Has demostrado una capacidad para utilizar diferentes palabras, frases y estructuras de manera efectiva, lo que enriquece tu comunicación.",
      "Impresionante variedad lingüística. Has utilizado una amplia gama de palabras, frases y estructuras para comunicarte de manera efectiva, lo que demuestra un dominio excepcional del idioma.",
      "Felicidades por tu habilidad para diversificar tu lenguaje. Has utilizado una variedad de palabras y estructuras para comunicar ideas de manera efectiva y creativa.",
      "Has demostrado una gran habilidad para diversificar tu lenguaje. Tu capacidad para utilizar una amplia variedad de palabras y estructuras enriquece tu comunicación y la hace más interesante.",
      "Tu habilidad para utilizar un lenguaje variado es impresionante. Has demostrado creatividad y habilidad para comunicarte de manera efectiva al emplear una amplia gama de palabras y estructuras.",
    ],
  },
  medium: {
    "Sofisticación": [
      "Tu nivel de sofisticación en el uso del lenguaje es promedio. Aunque has mostrado cierta habilidad para utilizar términos y estructuras más complejas, aún hay espacio para mejorar en este aspecto.",
      "Tienes un buen nivel de sofisticación lingüística, pero aún hay margen para crecer. Sigue explorando términos y estructuras complejas para enriquecer tu comunicación.",
      "Has mostrado cierta sofisticación en tu uso del lenguaje, pero aún puedes mejorar. Considera expandir tu vocabulario y explorar nuevas formas de expresión para enriquecer tu comunicación.",
      "Tu nivel de sofisticación lingüística es aceptable. Sigue trabajando en la incorporación de términos y estructuras más complejas para mejorar tu habilidad con el lenguaje.",
      "Tienes un buen comienzo en tu nivel de sofisticación lingüística. Continúa explorando nuevas formas de expresión para enriquecer tu comunicación y llevar tu habilidad con el lenguaje al siguiente nivel.",
    ],
    Densidad: [
      "La densidad de tu lenguaje es aceptable. Has logrado transmitir tus ideas de manera clara, pero sería beneficioso explorar formas de expresión más compactas y precisas para enriquecer tu comunicación.",
      "Tu nivel de densidad lingüística es promedio. Sigue trabajando en transmitir tus ideas de manera más concisa y precisa para mejorar tu comunicación.",
      "Tienes un buen nivel de densidad en tu lenguaje, pero aún puedes mejorar. Considera utilizar un vocabulario más variado y estructuras más compactas para enriquecer tu comunicación.",
      "Tu habilidad para comunicarte de manera densa es aceptable. Sigue practicando para transmitir tus ideas de manera más concisa y precisa, utilizando un lenguaje claro y directo.",
      "Has logrado transmitir tus ideas de manera aceptable, pero aún puedes mejorar en la densidad de tu lenguaje. Sigue trabajando en transmitir información compleja de manera concisa y precisa.",
    ],
    Variedad: [
      "Tu uso del lenguaje muestra una variedad decente. Has utilizado una gama de palabras y estructuras, pero podrías beneficiarte de explorar más opciones para diversificar aún más tu expresión.",
      "Tienes una variedad aceptable en tu lenguaje, pero aún hay margen para crecer. Sigue explorando nuevas palabras y estructuras para enriquecer tu comunicación.",
      "Has mostrado cierta variedad en tu lenguaje, pero aún puedes diversificar más tu expresión. Considera ampliar tu vocabulario y explorar diferentes formas de estructurar tus frases.",
      "Tu variedad lingüística es promedio. Sigue practicando para ampliar tu vocabulario y diversificar tu expresión para enriquecer tu comunicación.",
      "Tienes una buena base de variedad lingüística, pero aún puedes mejorar. Sigue explorando nuevas formas de expresión para enriquecer tu comunicación y hacerla más interesante.",
    ],
  },
  bad: {
    "Sofisticación": [
      "Tu uso del lenguaje muestra una falta de sofisticación. Sería beneficioso trabajar en la incorporación de términos y estructuras más complejas para mejorar tu habilidad lingüística.",
      "Necesitas mejorar tu nivel de sofisticación lingüística. Sigue trabajando en la exploración de términos y estructuras más complejas para enriquecer tu comunicación.",
      "Tu nivel de sofisticación lingüística es bajo. Considera ampliar tu vocabulario y explorar nuevas formas de expresión para mejorar tu habilidad con el lenguaje.",
      "Tienes un nivel bajo de sofisticación lingüística. Sigue practicando para utilizar términos y estructuras más complejas y enriquecer tu comunicación.",
      "Es importante mejorar tu nivel de sofisticación lingüística. Trabaja en la incorporación de términos y estructuras más complejas para enriquecer tu comunicación.",
    ],
    Densidad: [
      "La densidad de tu lenguaje es baja. Es importante trabajar en transmitir tus ideas de manera más compacta y precisa, utilizando un vocabulario más rico y variado.",
      "Tu nivel de densidad lingüística es bajo. Sigue trabajando en la transmisión de ideas de manera concisa y precisa para mejorar tu comunicación.",
      "Necesitas mejorar tu densidad lingüística. Sigue practicando para comunicar tus ideas de manera más compacta y precisa utilizando un lenguaje claro y directo.",
      "Tienes un nivel bajo de densidad en tu lenguaje. Trabaja en la simplificación y clarificación de tus ideas para mejorar tu comunicación.",
      "Es importante mejorar tu densidad lingüística. Sigue practicando para transmitir información compleja de manera concisa y precisa.",
    ],
    Variedad: [
      "Tu uso del lenguaje carece de variedad. Sería útil explorar diferentes palabras, frases y estructuras para enriquecer tu comunicación y evitar la repetición.",
      "Necesitas mejorar tu variedad lingüística. Sigue explorando nuevas palabras y estructuras para diversificar tu expresión y enriquecer tu comunicación.",
      "Tienes una falta de variedad en tu lenguaje. Trabaja en la incorporación de una gama más amplia de palabras y estructuras para enriquecer tu comunicación.",
      "Tu nivel de variedad lingüística es bajo. Sigue practicando para utilizar una mayor variedad de palabras y estructuras y hacer tu comunicación más interesante.",
      "Es importante mejorar tu variedad lingüística. Sigue explorando nuevas formas de expresión para enriquecer tu comunicación y hacerla más efectiva.",
    ],
  },
};
```

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add NLP constants, stopwords, common words, and use-debounce"
```

---

## Task 2: Create pure analysis functions

**Files:**
- Create: `src/lib/nlp/analysis.ts`

**Step 1: Create analysis functions — `src/lib/nlp/analysis.ts`**

This file contains pure functions (no hooks, no side effects) for text analysis:

```typescript
import { STOPWORDS, COMMON_WORDS } from "./constants";

export interface WordEntry {
  baseWord: string;
  count: number;
  isCommon: boolean;
  isStopword: boolean;
}

export type WordDictionary = Record<string, WordEntry>;

export interface AnalysisResult {
  variety: number;
  density: number;
  sophistication: number;
  repeatedCount: number;
  commonCount: number;
  totalWords: number;
  lexicalWords: number;
}

/**
 * Extract words from text (lowercase, only word characters).
 */
export function extractWords(text: string): string[] {
  const matches = text.toLowerCase().match(/[a-záéíóúüñ]+/gi);
  return matches || [];
}

/**
 * Build a word dictionary from text and a base word lookup map.
 * baseWordMap: maps inflected word -> base lemma (from FreeLing via IndexedDB)
 */
export function buildDictionary(
  text: string,
  baseWordMap: Record<string, string>
): WordDictionary {
  const words = extractWords(text);
  const dict: WordDictionary = {};

  for (const word of words) {
    const lower = word.toLowerCase();
    const base = baseWordMap[lower] || lower;

    if (!dict[lower]) {
      dict[lower] = {
        baseWord: base,
        count: 0,
        isCommon: COMMON_WORDS.has(base) || COMMON_WORDS.has(lower),
        isStopword: STOPWORDS.has(base) || STOPWORDS.has(lower),
      };
    }
    dict[lower].count++;
  }

  // Aggregate counts by base word (inflections share the same base)
  for (const key of Object.keys(dict)) {
    const base = dict[key].baseWord;
    let totalCount = 0;
    for (const k of Object.keys(dict)) {
      if (dict[k].baseWord === base) {
        totalCount += dict[k].count;
      }
    }
    dict[key].count = totalCount;
  }

  return dict;
}

/**
 * Compute lexical richness metrics from a word dictionary.
 */
export function computeMetrics(dict: WordDictionary): AnalysisResult {
  const entries = Object.values(dict);

  const totalWords = entries.reduce((sum, e) => sum + e.count, 0); // N
  const lexicalEntries = entries.filter((e) => !e.isStopword);
  const lexicalWords = lexicalEntries.reduce((sum, e) => sum + e.count, 0); // Nlex
  const uniqueLexical = lexicalEntries.length; // Tlex
  const sophisticatedEntries = lexicalEntries.filter((e) => !e.isCommon);
  const sophisticatedWords = sophisticatedEntries.reduce(
    (sum, e) => sum + e.count,
    0
  ); // Nslex

  const variety = lexicalWords > 0 ? uniqueLexical / lexicalWords : 0;
  const density = totalWords > 0 ? uniqueLexical / totalWords : 0;
  const sophistication = lexicalWords > 0 ? sophisticatedWords / lexicalWords : 0;

  const repeatedCount = lexicalEntries.filter((e) => e.count > 1).length;
  const commonCount = lexicalEntries.filter((e) => e.isCommon && e.count === 1).length;

  return {
    variety,
    density,
    sophistication,
    repeatedCount,
    commonCount,
    totalWords,
    lexicalWords,
  };
}

/**
 * Determine score status based on LSL/USL thresholds.
 */
export function getScoreStatus(
  score: number,
  limits: { LSL: number; USL: number }
): "good" | "medium" | "bad" {
  if (score >= limits.USL) return "good";
  if (score > limits.LSL) return "medium";
  return "bad";
}

/**
 * Simple Levenshtein distance for auto-save delta detection.
 */
export function levenshteinDistance(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      const cost = b.charAt(i - 1) === a.charAt(j - 1) ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[b.length][a.length];
}
```

**Step 2: Verify build**

```bash
pnpm build
```

**Step 3: Commit**

```bash
git add src/lib/nlp/analysis.ts
git commit -m "feat: add pure analysis functions for lexical metrics"
```

---

## Task 3: Create IndexedDB word cache hook

**Files:**
- Create: `src/hooks/use-word-cache.ts`

**Step 1: Create the hook — `src/hooks/use-word-cache.ts`**

```typescript
"use client";

import { useCallback, useRef } from "react";

const DB_NAME = "retmeepro-word-cache";
const DB_VERSION = 1;
const STORE_NAME = "wordGroups";

interface WordGroup {
  base: string;
  words: string[];
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "base" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export function useWordCache() {
  const dbRef = useRef<IDBDatabase | null>(null);

  const getDB = useCallback(async () => {
    if (!dbRef.current) {
      dbRef.current = await openDB();
    }
    return dbRef.current;
  }, []);

  /**
   * Save word groups from FreeLing response to IndexedDB.
   * wordGroups: { baseWord: [inflection1, inflection2, ...] }
   */
  const saveWordGroups = useCallback(
    async (wordGroups: Record<string, string[]>) => {
      const db = await getDB();
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);

      for (const [base, words] of Object.entries(wordGroups)) {
        const existing = await new Promise<WordGroup | undefined>(
          (resolve) => {
            const req = store.get(base);
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => resolve(undefined);
          }
        );

        const merged = existing
          ? [...new Set([...existing.words, ...words])]
          : words;

        store.put({ base, words: merged });
      }

      await new Promise<void>((resolve, reject) => {
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      });
    },
    [getDB]
  );

  /**
   * Get all cached words (flattened list of all inflections).
   */
  const getAllCachedWords = useCallback(async (): Promise<Set<string>> => {
    const db = await getDB();
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);

    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => {
        const allWords = new Set<string>();
        for (const group of request.result as WordGroup[]) {
          allWords.add(group.base);
          for (const w of group.words) {
            allWords.add(w.toLowerCase());
          }
        }
        resolve(allWords);
      };
      request.onerror = () => reject(request.error);
    });
  }, [getDB]);

  /**
   * Filter text to only return words NOT yet in cache (new words to send to FreeLing).
   */
  const filterNewWords = useCallback(
    async (text: string): Promise<string> => {
      const cached = await getAllCachedWords();
      const words = text.split(/\s+/).filter(Boolean);
      const newWords = words.filter(
        (w) => !cached.has(w.toLowerCase())
      );
      return newWords.join(" ");
    },
    [getAllCachedWords]
  );

  /**
   * Build a base word lookup map: { inflectedWord -> baseWord }
   */
  const getBaseWordMap = useCallback(async (): Promise<
    Record<string, string>
  > => {
    const db = await getDB();
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);

    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => {
        const map: Record<string, string> = {};
        for (const group of request.result as WordGroup[]) {
          map[group.base.toLowerCase()] = group.base.toLowerCase();
          for (const w of group.words) {
            map[w.toLowerCase()] = group.base.toLowerCase();
          }
        }
        resolve(map);
      };
      request.onerror = () => reject(request.error);
    });
  }, [getDB]);

  return { saveWordGroups, filterNewWords, getBaseWordMap, getAllCachedWords };
}
```

**Step 2: Verify build**

```bash
pnpm build
```

**Step 3: Commit**

```bash
git add src/hooks/use-word-cache.ts
git commit -m "feat: add IndexedDB word cache hook for FreeLing lemma caching"
```

---

## Task 4: Create the text analysis pipeline hook

**Files:**
- Create: `src/hooks/use-text-analysis.ts`

**Step 1: Create the hook — `src/hooks/use-text-analysis.ts`**

```typescript
"use client";

import { useState, useEffect, useCallback } from "react";
import { useDebounce } from "use-debounce";
import { useWordCache } from "./use-word-cache";
import {
  buildDictionary,
  computeMetrics,
  type WordDictionary,
  type AnalysisResult,
} from "@/lib/nlp/analysis";
import { DEBOUNCE_MS, CHAR_LIMIT } from "@/lib/nlp/constants";
import { toast } from "sonner";

export function useTextAnalysis(text: string, sectionSelected: boolean) {
  const [debouncedText] = useDebounce(text, DEBOUNCE_MS);
  const [analyzing, setAnalyzing] = useState(false);
  const [dictionary, setDictionary] = useState<WordDictionary>({});
  const [metrics, setMetrics] = useState<AnalysisResult | null>(null);
  const { saveWordGroups, filterNewWords, getBaseWordMap } = useWordCache();

  const analyze = useCallback(async () => {
    if (!debouncedText.trim() || !sectionSelected) return;

    if (debouncedText.length > CHAR_LIMIT) {
      toast.error(`El texto excede el límite de ${CHAR_LIMIT} caracteres`);
      setAnalyzing(false);
      return;
    }

    setAnalyzing(true);

    try {
      // Step 1: Filter out already-cached words
      const newWordsText = await filterNewWords(debouncedText.trim());

      // Step 2: Send only new words to FreeLing API
      if (newWordsText.length > 0) {
        const response = await fetch("/api/nlp/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: newWordsText }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.wordGroups) {
            await saveWordGroups(data.wordGroups);
          }
        }
      }

      // Step 3: Build dictionary using full text + cached base words
      const baseWordMap = await getBaseWordMap();
      const dict = buildDictionary(debouncedText, baseWordMap);
      setDictionary(dict);

      // Step 4: Compute metrics
      const result = computeMetrics(dict);
      setMetrics(result);
    } catch (error) {
      console.error("Analysis error:", error);
      toast.error("Error al analizar el texto");
    } finally {
      setAnalyzing(false);
    }
  }, [debouncedText, sectionSelected, filterNewWords, saveWordGroups, getBaseWordMap]);

  useEffect(() => {
    if (debouncedText.trim() && sectionSelected) {
      analyze();
    }
  }, [debouncedText, sectionSelected, analyze]);

  return { analyzing, dictionary, metrics };
}
```

**Step 2: Verify build**

```bash
pnpm build
```

**Step 3: Commit**

```bash
git add src/hooks/use-text-analysis.ts
git commit -m "feat: add text analysis pipeline hook with debouncing and caching"
```

---

## Task 5: Create the auto-save hook

**Files:**
- Create: `src/hooks/use-auto-save.ts`

**Step 1: Create the hook — `src/hooks/use-auto-save.ts`**

```typescript
"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { levenshteinDistance } from "@/lib/nlp/analysis";
import { AUTO_SAVE_INTERVAL_MS, SAVE_THRESHOLD } from "@/lib/nlp/constants";
import type { AnalysisResult } from "@/lib/nlp/analysis";
import type { SectionThresholds } from "@/lib/nlp/constants";
import { toast } from "sonner";

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
        if (manual) toast.error("No hay texto o título para guardar");
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
          toast.error("Sesión expirada, inicia sesión nuevamente");
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
        if (manual) toast.success("Guardado exitosamente");
      } catch (error) {
        console.error("Save error:", error);
        toast.error("Error al guardar");
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
```

**Step 2: Verify build**

```bash
pnpm build
```

**Step 3: Commit**

```bash
git add src/hooks/use-auto-save.ts
git commit -m "feat: add auto-save hook with Supabase persistence"
```

---

## Task 6: Create editor UI components

**Files:**
- Create: `src/components/editor/section-selector.tsx`
- Create: `src/components/editor/text-input.tsx`
- Create: `src/components/editor/text-preview.tsx`
- Create: `src/components/editor/analysis-score.tsx`
- Create: `src/components/editor/analysis-results.tsx`

**Step 1: Create all 5 components**

See the design doc for UI layout. Each component is a focused, small component:

- **SectionSelector**: Dropdown to pick academic section (7 options). Uses shadcn Select.
- **TextInput**: Textarea with character counter (750/800). Uses shadcn Textarea.
- **TextPreview**: Maps word dictionary to highlighted spans (red=repeated, yellow=common).
- **AnalysisScore**: Single metric progress bar with color coding + feedback message.
- **AnalysisResults**: Wrapper showing repeated/common counts + 3 AnalysisScore components.

**Step 2: Verify build**

```bash
pnpm build
```

**Step 3: Commit**

```bash
git add src/components/editor/
git commit -m "feat: add editor UI components (selector, input, preview, scores)"
```

---

## Task 7: Wire up the editor page

**Files:**
- Modify: `src/app/(dashboard)/editor/page.tsx`

**Step 1: Replace the placeholder with the full editor page**

Wire together all hooks and components:

```tsx
"use client";

import { useState } from "react";
import { useTextAnalysis } from "@/hooks/use-text-analysis";
import { useAutoSave } from "@/hooks/use-auto-save";
import { SectionSelector } from "@/components/editor/section-selector";
import { TextInput } from "@/components/editor/text-input";
import { TextPreview } from "@/components/editor/text-preview";
import { AnalysisResults } from "@/components/editor/analysis-results";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SECTION_THRESHOLDS, type SectionThresholds } from "@/lib/nlp/constants";

export default function EditorPage() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [selectedSection, setSelectedSection] = useState<SectionThresholds | null>(null);

  const { analyzing, dictionary, metrics } = useTextAnalysis(
    text,
    selectedSection !== null
  );

  const { saveStatus, saving, manualSave } = useAutoSave(
    title,
    text,
    metrics,
    selectedSection
  );

  return (
    <div className="space-y-6">
      {/* Header: section selector + save */}
      <div className="flex items-center justify-between gap-4">
        <SectionSelector
          sections={SECTION_THRESHOLDS}
          selected={selectedSection}
          onSelect={setSelectedSection}
        />
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{saveStatus}</span>
          <Button onClick={manualSave} disabled={saving} size="sm">
            {saving ? "Guardando..." : "Guardar"}
          </Button>
        </div>
      </div>

      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nombre del documento"
        />
      </div>

      {/* Text input */}
      <TextInput text={text} onChange={setText} analyzing={analyzing} />

      {/* Highlighted preview */}
      {Object.keys(dictionary).length > 0 && (
        <TextPreview text={text} dictionary={dictionary} />
      )}

      {/* Analysis results */}
      {metrics && selectedSection && (
        <AnalysisResults metrics={metrics} section={selectedSection} />
      )}
    </div>
  );
}
```

**Step 2: Verify build and manual test**

```bash
pnpm build
pnpm dev
# Visit /editor, type text, verify analysis pipeline works
```

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: implement editor page with lexical richness analysis"
```

---

## Task 8: Install shadcn Select component and verify full integration

**Files:**
- Possibly add `src/components/ui/select.tsx` if not already present

**Step 1: Add select component if needed**

```bash
pnpm dlx shadcn@latest add select
```

**Step 2: Run final build + lint**

```bash
pnpm build && pnpm lint
```

Fix any issues.

**Step 3: Commit and push**

```bash
git add -A
git commit -m "feat: finalize editor page integration"
git push origin master
```

---

## Summary of commits

1. `feat: add NLP constants, stopwords, common words, and use-debounce`
2. `feat: add pure analysis functions for lexical metrics`
3. `feat: add IndexedDB word cache hook for FreeLing lemma caching`
4. `feat: add text analysis pipeline hook with debouncing and caching`
5. `feat: add auto-save hook with Supabase persistence`
6. `feat: add editor UI components (selector, input, preview, scores)`
7. `feat: implement editor page with lexical richness analysis`
8. `feat: finalize editor page integration`
