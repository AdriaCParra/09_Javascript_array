/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 *
 * expected LANGUAGES: ['JavaScript', 'TypeScript']
 * expected BEATLES: ["George", "Ringo"];
 */

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];

export const getLongWords = (words) => {
  const wordsLongerThanFive = [];
  const wordsLength = words.length;

  for (let index = 0; index < wordsLength; index++) {
    const word = words[index];
    const wordLength = word.length;

    if (wordLength >= 5) wordsLongerThanFive.push(word);
  }
  return wordsLongerThanFive;
};
