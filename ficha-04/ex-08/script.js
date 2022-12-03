function countWordsAndChars(words) {
  // total number of words
  let totalNumberWords = words.length;

  // total number of chars in all words
  let totalCharsInWords = 0;
  for (let i in words) {
    totalCharsInWords += words[i].length;
  }

  // average number of chars per word
  let averageCharsInWords = totalCharsInWords / totalNumberWords;

  // output the results
  console.log('Total number of words: ' + totalNumberWords);
  console.log('Total number of chars: ' + totalCharsInWords);
  console.log('Average number of chars per word: ' + averageCharsInWords);
}

let wordsArray = ['jogging', 'running', 'swimming'];
console.log('Array: ' + wordsArray);
countWordsAndChars(wordsArray);
