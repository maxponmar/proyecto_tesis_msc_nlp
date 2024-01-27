import commonWordsFromFile from '../../../assets/lexical/commonwords.json';
import stopWordsFromFile from '../../../assets/lexical/stopwords.json';
import { buscarPalabraBase, openDataBase } from './indexDb';

export function createWordDictionary(text) {
    const commonWords = new Set(commonWordsFromFile);
    const stopWords = new Set(stopWordsFromFile);

    const wordCounts = {};
    const wordDictionary = {};

    // Split text into words using a regular expression
    const words = text.toLowerCase().match(/\b(\w+)\b/g);

    // Count occurrences of each word
    words.forEach((word) => {
        openDataBase((db) => {
            buscarPalabraBase(db, word, function (palabraBase) {
                wordCounts[palabraBase] = (wordCounts[palabraBase] || 0) + 1;
            });
        });
    });

    // Create the dictionary
    words.forEach((word) => {
        if (!wordDictionary[word]) {
            openDataBase((db) => {
                buscarPalabraBase(db, word, function (palabraBase) {
                    wordDictionary[word] = {
                        baseWord: palabraBase,
                        isCommonWord: commonWords.has(word),
                        isStopWord: stopWords.has(word),
                        isRepeatedWord: wordCounts[word] > 1,
                    };
                });
            });
        }
    });

    return wordDictionary;
}

export function analyzeText(text, dictionary) {
    console.log(dictionary)

    // Split text into words and non-word characters (like spaces, punctuation)
    const textParts = text.match(/\w+|\W+/g);
    const cleanText = text.match(/\b(\w+)\b/g)

    const nonStopWords = cleanText.filter(word => {
        const lowerWord = word.toLowerCase();
        return dictionary[lowerWord] && !dictionary[lowerWord].isStopWord;
    });

    const uniqueWords = new Set(nonStopWords);

    // TODO: Deben ser unicas?
    const commonWords = nonStopWords.filter(word => {
        const lowerWord = word.toLowerCase();
        return dictionary[lowerWord] && dictionary[lowerWord].isCommonWord;
    });

    const repeatedWords = nonStopWords.filter(word => {
        const lowerWord = word.toLowerCase();
        return dictionary[lowerWord] && dictionary[lowerWord].isRepeatedWord;
    });

    // console.log(commonWords)

    const N = cleanText.length;
    const Nlex = nonStopWords.length;
    const Tlex = uniqueWords.size;
    const Nslex = Nlex - commonWords.length;

    // console.log("N: " + N)
    // console.log("Nlex: " + Nlex)
    // console.log("Tlex: " + Tlex)
    // console.log("Nslex: " + Nslex)

    const scores = [
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
    ]

    const highlightedText = textParts
        .map((part, index) => {
            if (part === ' ') return <span key={index}>&nbsp;</span>
            const lowerPart = part.toLowerCase();
            if (/\w+/.test(part) && dictionary[lowerPart]) {
                if (dictionary[lowerPart].isStopWord) {
                    return <span key={index}>{part}</span>;
                } else if (dictionary[lowerPart].isCommonWord) {
                    return <span key={index} className='font-bold bg-yellow-400'>{part}</span>;
                } else if (dictionary[lowerPart].isRepeatedWord) {
                    return <span key={index} className='text-red-500'>{part}</span>;
                } else {
                    return <span key={index}>{part}</span>;
                }
            }
            return <span>{part}</span>;
        })
    return { scores, highlightedText, repeatedWords: repeatedWords.length, commonWords: commonWords.length }
}