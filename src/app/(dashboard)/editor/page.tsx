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
