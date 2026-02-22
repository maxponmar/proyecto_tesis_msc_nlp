import commonThousandWords from '../../../assets/lexical/commonwords.json';
import stopwords from '../../../assets/lexical/stopwords.json';

export default function AnalyzeText(text) {
  const words = text.split(' ');
  const rawWords = words.filter((word) => word.trim() !== '');
  const withoutStopwords = rawWords.filter((element) => !stopwords.includes(element));

  const commonWords = withoutStopwords.filter((word) => commonThousandWords.includes(word));
  const freq = {};
  let totalCount = 0; // initialize the total count to 0
  for (let i = 0; i < withoutStopwords.length; i++) {
    if (freq[withoutStopwords[i]]) {
      freq[withoutStopwords[i]]++;
      totalCount++; // increment the total count if a word is repeated
    } else {
      freq[withoutStopwords[i]] = 1;
    }
  }

  const uniqueWords = new Set(withoutStopwords);
  const numUniqueWords = uniqueWords.size;

  const Tlex = numUniqueWords;
  const Nlex = withoutStopwords.length;
  const N = rawWords.length;
  const Nslex = withoutStopwords.length - commonWords.length;

  return [
    {
      name: 'Variedad',
      score: Tlex / Nlex,
    },
    {
      name: 'Densidad',
      score: Tlex / N,
    },
    {
      name: 'Sofisticación',
      score: Nslex / Nlex,
    },
  ];
}
