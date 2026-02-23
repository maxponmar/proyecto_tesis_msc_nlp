"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface FreelingInputProps {
  onAnalyze: (text: string) => void;
  analyzing: boolean;
  disabled?: boolean;
}

export function FreelingInput({
  onAnalyze,
  analyzing,
  disabled,
}: FreelingInputProps) {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAnalyze(text);
      }}
      className="space-y-3"
    >
      <Textarea
        placeholder="Escribe o pega un texto para analizar con FreeLing..."
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={analyzing || disabled}
      />
      <Button type="submit" disabled={analyzing || disabled || !text.trim()}>
        {analyzing ? "Analizando..." : "Analizar con FreeLing"}
      </Button>
    </form>
  );
}
