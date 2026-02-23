"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useObjectiveAnalysis } from "@/hooks/use-objective-analysis";
import { ObjectiveEditor } from "@/components/objectives/objective-editor";
import { Button } from "@/components/ui/button";

const LEGEND = [
  { label: "Qué", className: "hl-obj-que", description: "El qué del objetivo" },
  { label: "Cómo", className: "hl-obj-como", description: "El cómo del objetivo" },
  {
    label: "Para qué",
    className: "hl-obj-paraque",
    description: "El para qué del objetivo",
  },
] as const;

export default function ObjectivesPage() {
  const [text, setText] = useState("");
  const { analyzing, result, analyze, clear } = useObjectiveAnalysis();

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl font-bold">Análisis de Objetivos</h2>
        <p className="text-sm text-muted-foreground">
          Escribe un objetivo académico y analiza su estructura (Qué, Cómo, Para
          qué).
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <ObjectiveEditor
          text={text}
          onChange={setText}
          result={result}
          analyzing={analyzing}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex items-center gap-2"
      >
        {!result ? (
          <Button onClick={() => analyze(text)} disabled={analyzing}>
            {analyzing ? "Analizando..." : "Analizar"}
          </Button>
        ) : (
          <Button variant="outline" onClick={clear}>
            Limpiar
          </Button>
        )}
      </motion.div>

      <AnimatePresence>
        {result && result.tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <h3 className="text-sm font-medium">Leyenda</h3>
            <div className="flex flex-wrap gap-4">
              {LEGEND.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span
                    className={`${item.className} px-2 py-0.5 rounded text-sm`}
                  >
                    ejemplo
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
