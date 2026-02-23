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
    const headers = ["Palabra", "Lema", "Categor\u00eda Gramatical", "Probabilidad"];
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
