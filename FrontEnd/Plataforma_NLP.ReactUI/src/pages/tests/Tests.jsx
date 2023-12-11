import { Color } from '@tiptap/extension-color';
import { Highlight } from '@tiptap/extension-highlight';
import TextStyle from '@tiptap/extension-text-style';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useState } from 'react';

export default function Tests() {
  const [content, setContent] = useState('<p>Hola <strong>esta</strong> es una prueba <mark>ssss</mark></p>');
  const editor = useEditor({
    extensions: [StarterKit.configure(), TextStyle, Color, Highlight],
    content: content,
    editorProps: {
      attributes: {
        class:
          'rounded-md border border-black min-h-[150px] border-input bg-background px-3 py-5 ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      },
    },
    onUpdate({ editor }) {
      console.log(editor.getHTML());
    },
  });

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
}
