"use client";

import { useEffect, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { Extension } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import CharacterCount from "@tiptap/extension-character-count";
import { CHAR_LIMIT } from "@/lib/nlp/constants";
import { createHighlightPlugin, highlightPluginKey } from "@/lib/nlp/highlight-plugin";
import type { WordDictionary } from "@/lib/nlp/analysis";
import { Label } from "@/components/ui/label";

interface TiptapEditorProps {
  text: string;
  onChange: (text: string) => void;
  dictionary: WordDictionary;
  analyzing: boolean;
}

export function TiptapEditor({
  text,
  onChange,
  dictionary,
  analyzing,
}: TiptapEditorProps) {
  const highlightPluginRef = useRef(createHighlightPlugin());

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        // Disable all rich-text features — plain text only
        bold: false,
        italic: false,
        strike: false,
        code: false,
        codeBlock: false,
        blockquote: false,
        bulletList: false,
        orderedList: false,
        heading: false,
        horizontalRule: false,
        listItem: false,
        hardBreak: false,
      }),
      CharacterCount.configure({
        limit: CHAR_LIMIT,
      }),
      Extension.create({
        name: "wordHighlight",
        addProseMirrorPlugins() {
          return [highlightPluginRef.current];
        },
      }),
    ],
    content: text,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm max-w-none focus:outline-none min-h-[200px] p-4",
        "aria-label": "Editor de texto",
      },
    },
    onUpdate({ editor: ed }) {
      onChange(ed.getText());
    },
  });

  // Sync dictionary changes into the ProseMirror plugin via transaction metadata
  useEffect(() => {
    if (!editor || editor.isDestroyed) return;
    editor.view.dispatch(
      editor.view.state.tr.setMeta(highlightPluginKey, dictionary)
    );
  }, [editor, dictionary]);

  const charCount = editor?.storage.characterCount?.characters() ?? text.length;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label>Texto</Label>
        {analyzing && (
          <span className="text-xs text-muted-foreground">Analizando...</span>
        )}
      </div>
      <div className="rounded-md border bg-background">
        <EditorContent editor={editor} />
      </div>
      <p className="text-xs text-muted-foreground text-right">
        {charCount}/{CHAR_LIMIT} caracteres
      </p>
    </div>
  );
}
