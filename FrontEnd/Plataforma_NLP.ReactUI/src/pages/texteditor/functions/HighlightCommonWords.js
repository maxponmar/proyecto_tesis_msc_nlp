import commonWords from '../../../assets/lexical/commonwords.json';

export default function HighLightCommonWords(input) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(input, 'text/html');

  function highlightCommonWords(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      for (let word of commonWords) {
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        node.textContent = node.textContent.replace(regex, `<span style="background-color: yellow;">${word}</span>`);
      }
    } else {
      for (let child of node.childNodes) {
        highlightCommonWords(child);
      }
    }
  }

  highlightCommonWords(doc.body);

  let highlightedStr = `<p>${doc.body.innerHTML}</p>`.replace(/&gt;/g, '>').replace(/&lt;/g, '<');

  return highlightedStr;
}
