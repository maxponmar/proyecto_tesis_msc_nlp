import { Color } from '@tiptap/extension-color';
import { Highlight } from '@tiptap/extension-highlight';
import TextStyle from '@tiptap/extension-text-style';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useState } from 'react';
import commonWordsFromFile from '../../assets/lexical/commonwords.json';
import stopWordsFromFile from '../../assets/lexical/stopwords.json';

export default function Tests() {
  const [content, setContent] = useState(
    '<p>Esta es una pruebal con una palabra <span style="color: red">repetida</span> y otra <mark>comun</mark>. pruebas</p>',
  );

  function createWordDictionary(text) {
    const commonWords = new Set(commonWordsFromFile);
    const stopWords = new Set(stopWordsFromFile);

    const wordCounts = {};
    const wordDictionary = {};

    // Split text into words using a regular expression
    const words = text.toLowerCase().match(/\b(\w+)\b/g);

    // Count occurrences of each word
    words.forEach((word) => {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    });

    // Create the dictionary
    words.forEach((word) => {
      if (!wordDictionary[word]) {
        wordDictionary[word] = {
          baseWord: word,
          isCommonWord: commonWords.has(word),
          isStopWord: stopWords.has(word),
          isRepeatedWord: wordCounts[word] > 1,
        };
      }
    });

    return wordDictionary;
  }

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
      console.log(editor.getText());
      const dictionary = createWordDictionary(editor.getText());
      console.log(dictionary);
    },
  });

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
}
