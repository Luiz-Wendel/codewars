/* eslint-disable no-restricted-syntax */
/* Source: https://www.codewars.com/kata/5277c8a221e209d3f6000b56 */

function validBraces(braces) {
  const bracesArray = ['()', '[]', '{}'];
  let bracez = braces;

  let hadPair = false;
  do {
    for (const bracesPair of bracesArray) {
      if (bracez.includes(bracesPair)) {
        bracez = bracez.replace(bracesPair, '');
        hadPair = true;
        break;
      } else hadPair = false;
    }
  } while (hadPair);

  return bracez.length === 0;
}

module.exports = { validBraces };
