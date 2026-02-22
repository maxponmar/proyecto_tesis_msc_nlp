import commonWords from '../../../assets/lexical/commonwords.json';

function detectarPalabrasRepetidas(cadena) {
  let palabras = cadena
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .split(' ');
  let conteoPalabras = {};

  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    if (palabra in conteoPalabras) {
      conteoPalabras[palabra]++;
    } else {
      conteoPalabras[palabra] = 1;
    }
  }

  let palabrasRepetidas = {};
  for (let palabra in conteoPalabras) {
    if (conteoPalabras[palabra] > 1) {
      palabrasRepetidas[palabra] = conteoPalabras[palabra];
    }
  }

  return palabrasRepetidas;
}

export default function HighLightCommonWords(input) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(input, 'text/html');

  let repeatedWords = detectarPalabrasRepetidas(input);

  let totalCommonWords = 0;
  let totalRepeatedWords = 0;

  function highlightCommonWords(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      for (let commonWord of commonWords) {
        const regex = new RegExp(`\\b${commonWord}\\b`, 'g');
        let matches = node.textContent.match(regex);
        let numReplacements = matches ? matches.length : 0;
        totalCommonWords = totalCommonWords + numReplacements;
        node.textContent = node.textContent.replace(
          regex,
          `<span style="background-color: yellow;">${commonWord}</span>`,
        );
      }
      for (let repeatedWord in repeatedWords) {
        const regex = new RegExp(`\\b${repeatedWord}\\b`, 'g');
        let matches = node.textContent.match(regex);
        let numReplacements = matches ? matches.length : 0;
        totalRepeatedWords = totalRepeatedWords + numReplacements;
        node.textContent = node.textContent.replace(regex, `<u style="color: red;">${repeatedWord}</u>`);
      }
    } else {
      for (let child of node.childNodes) {
        highlightCommonWords(child);
      }
    }
  }

  highlightCommonWords(doc.body);

  let highlightedStr = `<p>${doc.body.innerHTML}</p>`.replace(/&gt;/g, '>').replace(/&lt;/g, '<');

  let result = { highlightedText: highlightedStr, totalCommonWords, repeatedWords, totalRepeatedWords };
  return result;
}
