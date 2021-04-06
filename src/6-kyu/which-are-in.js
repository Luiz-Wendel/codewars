/* eslint-disable no-restricted-syntax */
/* Source: https://www.codewars.com/kata/550554fd08b86f84fe000a58 */

function inArray(firstArray, secondArray) {
  const result = [];

  secondArray.forEach((element) => {
    for (const string of firstArray) {
      if (element.includes(string)) result.push(string);
    }
  });

  return [...new Set(result.sort())];
}

module.exports = { inArray };
