"use client";

import { useState } from "react";
import { useTextAnalysis } from "@/hooks/use-text-analysis";
import { useAutoSave } from "@/hooks/use-auto-save";
import { useFreelingStatus } from "@/hooks/use-freeling-status";
import { SectionSelector } from "@/components/editor/section-selector";
import { TextInput } from "@/components/editor/text-input";
import { TextPreview } from "@/components/editor/text-preview";
import { AnalysisResults } from "@/components/editor/analysis-results";
import { Badge } from "@/components/ui/badge";
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

  const { status: freelingStatus } = useFreelingStatus();

  return (
    <div className="space-y-6">
      {freelingStatus !== "ready" && (
        <div
          role={freelingStatus === "error" ? "alert" : "status"}
          aria-live={freelingStatus === "error" ? "assertive" : "polite"}
          className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm"
        >
          {freelingStatus === "connecting" && (
            <>
              <span aria-hidden="true" className="inline-block h-2 w-2 animate-pulse rounded-full bg-yellow-500" />
              <span>Verificando servicio de análisis...</span>
            </>
          )}
          {freelingStatus === "starting" && (
            <>
              <span aria-hidden="true" className="inline-block h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              <span>Iniciando servicio de análisis...</span>
            </>
          )}
          {freelingStatus === "error" && (
            <>
              <Badge variant="destructive">Error</Badge>
              <span>El servicio de análisis no está disponible.</span>
            </>
          )}
        </div>
      )}

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
