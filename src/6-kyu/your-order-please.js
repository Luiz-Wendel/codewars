/* Source: https://www.codewars.com/kata/55c45be3b2079eccff00010f */

function order(words) {
  if (words.length <= 0) return '';

  const sortedWords = [];
  const wordsArray = words.split(' ');

  wordsArray.forEach((element) => {
    sortedWords[element.match(/[\d]/g) - 1] = element;
  });

  return sortedWords.join(' ');
}

module.exports = { order };
