/* Source: https://www.codewars.com/kata/54d4c8b08776e4ad92000835 */
const assert = require('assert');

const isPP = (number) => {
  const max = Math.ceil(Math.sqrt(number));
  for (let firstIndex = 2; firstIndex <= max; firstIndex += 1) {
    for (let secondIndex = 2; secondIndex <= max; secondIndex += 1) {
      if (number === firstIndex ** secondIndex) return [firstIndex, secondIndex];
      if (number < firstIndex ** secondIndex) break;
    }
  }
  return null;
};

assert.deepStrictEqual(isPP(4), [2, 2], '4 = 2^2');
assert.deepStrictEqual(isPP(9), [3, 2], '9 = 3^2');
assert.strictEqual(isPP(5), null, '5 isn\'t a perfect number');

module.exports = { isPP };
