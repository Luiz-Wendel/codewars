/* Source: https://www.codewars.com/kata/51e056fe544cf36c410000fb */

const assert = require('assert');

function topThreeWords(text) {
  const filteredText = text.replace(/[.,/]/g, '').trim().replace(/[\s]+/g, ' ').toLowerCase();

  if (filteredText.length === 0 || filteredText === "'") return [];

  const textArray = filteredText.split(' ');

  const textObject = textArray.reduce((txtObject, word) => {
    const obj = { ...txtObject };
    obj[word] = obj[word] ? obj[word] + 1 : 1;
    return obj;
  }, {});

  const sortedObject = Object
    .entries(textObject)
    .sort((firstValue, secondValue) => secondValue[1] - firstValue[1]);

  return sortedObject.reduce((result, wordObject) => (
    result.length < 3 ? [...result, wordObject[0]] : result
  ), []);
}

assert.deepStrictEqual(topThreeWords('a a a  b  c c  d d d d  e e e e e'), ['e', 'd', 'a']);
assert.deepStrictEqual(topThreeWords('a a c b b'), ['a', 'b', 'c']);
assert.deepStrictEqual(topThreeWords('e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e'), ['e', 'ddd', 'aa']);
assert.deepStrictEqual(topThreeWords("  //wont won't won't "), ["won't", 'wont']);
assert.deepStrictEqual(topThreeWords('  , e   .. '), ['e']);
assert.deepStrictEqual(topThreeWords('  ...  '), []);
assert.deepStrictEqual(topThreeWords("  '  "), []);
assert.deepStrictEqual(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`), ['a', 'of', 'on']);

module.exports = { topThreeWords };
