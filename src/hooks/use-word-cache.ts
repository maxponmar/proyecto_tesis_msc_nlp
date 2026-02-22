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
