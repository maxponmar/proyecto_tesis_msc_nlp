"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTextAnalysis } from "@/hooks/use-text-analysis";
import { useAutoSave } from "@/hooks/use-auto-save";
import { useFreelingStatus } from "@/hooks/use-freeling-status";
import { SectionSelector } from "@/components/editor/section-selector";
import { TiptapEditor } from "@/components/editor/tiptap-editor";
import { AnalysisResults } from "@/components/editor/analysis-results";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SECTION_THRESHOLDS, type SectionThresholds } from "@/lib/nlp/constants";

export default function EditorPage() {
  const [title, setTitle] = useState(
    () => `DOC-${crypto.randomUUID().slice(0, 8)}`
  );
  const [text, setText] = useState("");
  const [selectedSection, setSelectedSection] =
    useState<SectionThresholds | null>(null);

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

  const { status: freelingStatus } = useFreelingStatus();

  return (
    <div className="space-y-6">
      {/* Section selection overlay */}
      <AnimatePresence>
        {selectedSection === null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center gap-6 rounded-xl border bg-card p-8 shadow-lg"
            >
              <div className="space-y-2 text-center">
                <h2 className="text-xl font-semibold">
                  Selecciona una sección
                </h2>
                <p className="text-sm text-muted-foreground">
                  Elige la sección del documento que vas a redactar para activar
                  el análisis.
                </p>
              </div>
              <SectionSelector
                sections={SECTION_THRESHOLDS}
                selected={selectedSection}
                onSelect={setSelectedSection}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FreeLing status alert */}
      <AnimatePresence>
        {freelingStatus !== "ready" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            role={freelingStatus === "error" ? "alert" : "status"}
            aria-live={freelingStatus === "error" ? "assertive" : "polite"}
            className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm"
          >
            {freelingStatus === "connecting" && (
              <>
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 animate-pulse rounded-full bg-yellow-500"
                />
                <span>Verificando servicio de análisis...</span>
              </>
            )}
            {freelingStatus === "starting" && (
              <>
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 animate-pulse rounded-full bg-blue-500"
                />
                <span>Iniciando servicio de análisis...</span>
              </>
            )}
            {freelingStatus === "error" && (
              <>
                <Badge variant="destructive">Error</Badge>
                <span>El servicio de análisis no está disponible.</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header: section selector + save */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex items-center justify-between gap-4"
      >
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
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="space-y-2"
      >
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nombre del documento"
        />
      </motion.div>

      {/* Tiptap editor with inline highlighting */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <TiptapEditor
          text={text}
          onChange={setText}
          dictionary={dictionary}
          analyzing={analyzing}
        />
      </motion.div>

      {/* Analysis results */}
      <AnimatePresence>
        {metrics && selectedSection && (
          <motion.div
            key="analysis-results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <AnalysisResults metrics={metrics} section={selectedSection} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
