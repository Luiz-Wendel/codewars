/* Source: https://www.codewars.com/kata/5679aa472b8f57fb8c000047 */

function findEvenIndex(arr) {
  let leftSum = 0;
  let rightSum = 0;

  for (let index = 0; index < arr.length; index += 1) {
    if (index > 0) {
      for (let leftIndex = index - 1; leftIndex >= 0; leftIndex -= 1) {
        leftSum += arr[leftIndex];
      }
    }

    for (
      let rightIndex = index + 1;
      rightIndex < arr.length;
      rightIndex += 1
    ) {
      rightSum += arr[rightIndex];
    }

    if (leftSum === rightSum) return index;

    leftSum = 0;
    rightSum = 0;
  }

  return -1;
}

module.exports = { findEvenIndex };
