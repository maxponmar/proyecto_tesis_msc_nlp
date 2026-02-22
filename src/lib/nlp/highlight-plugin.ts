import { Plugin, PluginKey } from "@tiptap/pm/state";
import { Decoration, DecorationSet } from "@tiptap/pm/view";
import type { WordDictionary } from "./analysis";

export const highlightPluginKey = new PluginKey("wordHighlight");

/**
 * Regex to match Spanish word tokens in the document text.
 * Must stay in sync with extractWords() in analysis.ts.
 */
const WORD_RE = /[a-záéíóúüñ]+/gi;

/**
 * Build a DecorationSet that highlights repeated and common words.
 *
 * Rules (applied per word, excluding stopwords):
 *  - Red + semibold  → repeated words (same base lemma appears 2+ times)
 *  - Yellow + bold   → common words (first occurrence only)
 *  - No decoration   → stopwords and unique non-common words
 */
function buildDecorations(
  doc: Parameters<typeof DecorationSet.create>[0],
  dictionary: WordDictionary
): DecorationSet {
  const decorations: Decoration[] = [];

  if (Object.keys(dictionary).length === 0) {
    return DecorationSet.empty;
  }

  // Track which common words we've already seen (for first-occurrence logic)
  const seenCommon = new Set<string>();

  doc.descendants((node, pos) => {
    if (!node.isText || !node.text) return;

    let match: RegExpExecArray | null;
    WORD_RE.lastIndex = 0;

    while ((match = WORD_RE.exec(node.text)) !== null) {
      const word = match[0].toLowerCase();
      const entry = dictionary[word];

      if (!entry || entry.isStopword) continue;

      let cssClass = "";

      if (entry.count > 1) {
        // Repeated word — red + semibold
        cssClass = "hl-repeated";
      } else if (entry.isCommon && !seenCommon.has(entry.baseWord)) {
        // Common word, first occurrence — yellow + bold
        cssClass = "hl-common";
      }

      seenCommon.add(entry.baseWord);

      if (cssClass) {
        const from = pos + match.index;
        const to = from + match[0].length;
        decorations.push(
          Decoration.inline(from, to, { class: cssClass })
        );
      }
    }
  });

  return DecorationSet.create(doc, decorations);
}

/**
 * Create a ProseMirror plugin that applies word-highlight decorations.
 *
 * Call `setHighlightDictionary()` to update the dictionary from React state.
 * The plugin rebuilds decorations on every doc change or dictionary update.
 */
export function createHighlightPlugin() {
  let currentDictionary: WordDictionary = {};

  const plugin: Plugin<DecorationSet> = new Plugin<DecorationSet>({
    key: highlightPluginKey,

    state: {
      init(_, { doc }) {
        return buildDecorations(doc, currentDictionary);
      },
      apply(tr, oldDecorations) {
        // Rebuild when doc changed or dictionary was updated via metadata
        const newDict = tr.getMeta(highlightPluginKey);
        if (newDict !== undefined) {
          currentDictionary = newDict;
          return buildDecorations(tr.doc, currentDictionary);
        }
        if (tr.docChanged) {
          return buildDecorations(tr.doc, currentDictionary);
        }
        return oldDecorations;
      },
    },

    props: {
      decorations(state) {
        return plugin.getState(state);
      },
    },
  });

  return plugin;
}
