import { Plugin, PluginKey } from "@tiptap/pm/state";
import { Decoration, DecorationSet } from "@tiptap/pm/view";
import type { ObjectiveResult, ObjectiveCategory } from "./objective-parser";

export const objectiveHighlightKey = new PluginKey("objectiveHighlight");

const CATEGORY_CLASSES: Record<ObjectiveCategory, string> = {
  QUE: "hl-obj-que",
  COMO: "hl-obj-como",
  PARAQUE: "hl-obj-paraque",
};

const CATEGORY_LABELS: Record<ObjectiveCategory, string> = {
  QUE: "Qué",
  COMO: "Cómo",
  PARAQUE: "Para qué",
};

const WORD_RE = /[a-záéíóúüñ]+/gi;

function buildDecorations(
  doc: Parameters<typeof DecorationSet.create>[0],
  result: ObjectiveResult
): DecorationSet {
  if (result.tags.length === 0) return DecorationSet.empty;

  const decorations: Decoration[] = [];

  // Build a lookup: wordIndex -> category
  const tagMap = new Map<number, ObjectiveCategory>();
  for (const tag of result.tags) {
    if (!tagMap.has(tag.wordIndex)) {
      tagMap.set(tag.wordIndex, tag.category);
    }
  }

  let wordIndex = 0;

  doc.descendants((node, pos) => {
    if (!node.isText || !node.text) return;

    let match: RegExpExecArray | null;
    WORD_RE.lastIndex = 0;

    while ((match = WORD_RE.exec(node.text)) !== null) {
      const category = tagMap.get(wordIndex);
      if (category) {
        const from = pos + match.index;
        const to = from + match[0].length;
        decorations.push(
          Decoration.inline(from, to, {
            class: CATEGORY_CLASSES[category],
            title: CATEGORY_LABELS[category],
          })
        );
      }
      wordIndex++;
    }
  });

  return DecorationSet.create(doc, decorations);
}

export function createObjectiveHighlightPlugin() {
  let currentResult: ObjectiveResult = { words: [], tags: [] };

  const plugin: Plugin<DecorationSet> = new Plugin<DecorationSet>({
    key: objectiveHighlightKey,

    state: {
      init(_, { doc }) {
        return buildDecorations(doc, currentResult);
      },
      apply(tr, oldDecorations) {
        const newResult = tr.getMeta(objectiveHighlightKey);
        if (newResult !== undefined) {
          currentResult = newResult;
          return buildDecorations(tr.doc, currentResult);
        }
        if (tr.docChanged) {
          return buildDecorations(tr.doc, currentResult);
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
