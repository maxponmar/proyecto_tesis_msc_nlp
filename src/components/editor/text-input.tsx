"use client";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CHAR_LIMIT } from "@/lib/nlp/constants";

interface TextInputProps {
  text: string;
  onChange: (text: string) => void;
  analyzing: boolean;
}

export function TextInput({ text, onChange, analyzing }: TextInputProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="editor-text">Texto</Label>
        {analyzing && (
          <span className="text-xs text-muted-foreground">Analizando...</span>
        )}
      </div>
      <Textarea
        id="editor-text"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Escribe o pega tu texto aquí..."
        rows={8}
        maxLength={CHAR_LIMIT}
        className="resize-none"
      />
      <p className="text-xs text-muted-foreground text-right">
        {text.length}/{CHAR_LIMIT} caracteres
      </p>
    </div>
  );
}
