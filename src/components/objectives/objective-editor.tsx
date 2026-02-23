"use client";

import { useEffect, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { Extension } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import {
  createObjectiveHighlightPlugin,
  objectiveHighlightKey,
} from "@/lib/nlp/objective-highlight-plugin";
import type { ObjectiveResult } from "@/lib/nlp/objective-parser";
import { Label } from "@/components/ui/label";

interface ObjectiveEditorProps {
  text: string;
  onChange: (text: string) => void;
  result: ObjectiveResult | null;
  analyzing: boolean;
}

export function ObjectiveEditor({
  text,
  onChange,
  result,
  analyzing,
}: ObjectiveEditorProps) {
  const pluginRef = useRef(createObjectiveHighlightPlugin());

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
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
      Extension.create({
        name: "objectiveHighlight",
        addProseMirrorPlugins() {
          // eslint-disable-next-line react-hooks/rules-of-hooks -- stable ref, read once at init
          return [pluginRef.current];
        },
      }),
    ],
    content: text,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm max-w-none focus:outline-none min-h-[120px] p-4",
        "aria-label": "Editor de objetivo",
      },
    },
    onUpdate({ editor: ed }) {
      onChange(ed.getText());
    },
  });

  // Sync editable state + highlight decorations when result or analyzing changes
  useEffect(() => {
    if (!editor || editor.isDestroyed) return;
    editor.setEditable(!result && !analyzing);
    editor.view.dispatch(
      editor.view.state.tr.setMeta(
        objectiveHighlightKey,
        result ?? { words: [], tags: [] }
      )
    );
  }, [editor, result, analyzing]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label>Objetivo</Label>
        {analyzing && (
          <span className="text-xs text-muted-foreground">
            Analizando... esto puede tomar más de 20 segundos
          </span>
        )}
      </div>
      <div className="rounded-md border bg-background">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
