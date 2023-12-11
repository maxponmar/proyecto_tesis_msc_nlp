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
    '<p>Esta es una prueba con una palabra <span style="color: red">repetida</span> <span style="color: red">repetida</span> y otra <mark>comun</mark></p>',
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

  function highlightText(text, dictionary) {
    // Split text into words and non-word characters (like spaces, punctuation)
    const parts = text.match(/\w+|\W+/g);
    console.log(parts);
    return parts
      .map((part) => {
        const lowerPart = part.toLowerCase();
        if (/\w+/.test(part) && dictionary[lowerPart]) {
          if (dictionary[lowerPart].isStopWord) {
            return part;
          } else if (dictionary[lowerPart].isCommonWord) {
            return `<mark>${part}</mark>`;
          } else if (dictionary[lowerPart].isRepeatedWord) {
            return `<span style="color: red">${part}</span>`;
          } else {
            return part;
          }
        }
        return part;
      })
      .join('');
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
      // console.log(editor.getHTML());
      // console.log(editor.getText());
      const dictionary = createWordDictionary(editor.getText());
      console.log(dictionary);
      const highlightedText = highlightText(editor.getText(), dictionary);
      setContent(highlightedText);
      console.log(highlightedText);
      editor.commands.setContent(highlightedText);
    },
  });

  return (
    <div>
      <button
        onClick={() => {
          const dictionary = createWordDictionary(editor.getText());
          const highlightedText = highlightText(editor.getText(), dictionary);
          editor.commands.insertContent(highlightedText);
        }}
      >
        test
      </button>
      <EditorContent editor={editor} />
    </div>
  );
}
