/* eslint
guard-for-in: "off",
no-console: ["error", { allow: ["log", "warn", "error"] }],
no-restricted-syntax: "off" */

function countWordsAndChars(words) {
  // total number of words
  const totalNumberWords = words.length;

  // total number of chars in all words
  let totalCharsInWords = 0;
  for (const i in words) {
    totalCharsInWords += words[i].length;
  }

  // average number of chars per word
  const averageCharsInWords = totalCharsInWords / totalNumberWords;

  // output the results
  console.log(`Total number of words: ${totalNumberWords}`);
  console.log(`Total number of chars: ${totalCharsInWords}`);
  console.log(`Average number of chars per word: ${averageCharsInWords}`);
}

const wordsArray = ['jogging', 'running', 'swimming'];
console.log(`Array: ${wordsArray}`);
countWordsAndChars(wordsArray);
