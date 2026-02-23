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

  const handleClickWord = useCallback((word: string) => {
    setLockedWord((prev) => (prev === word ? null : word));
  }, []);

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
