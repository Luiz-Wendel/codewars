/* Source: https://www.codewars.com/kata/5254ca2719453dcc0b00027d */

/*
  Permute function based on Heap's algorithm
  Source: https://en.wikipedia.org/wiki/Heap%27s_algorithm
*/
function permute(array, position, result = []) {
  if (position === 1) result.push(array.join(''));
  else {
    permute(array, position - 1, result);
    const arrayCopy = array;

    for (let index = 0; index < position - 1; index += 1) {
      if (position % 2 === 0) {
        [arrayCopy[index], arrayCopy[position - 1]] = [arrayCopy[position - 1], arrayCopy[index]];
      } else {
        [arrayCopy[0], arrayCopy[position - 1]] = [arrayCopy[position - 1], arrayCopy[0]];
      }
      permute(array, position - 1, result);
    }
  }

  return [...new Set(result)];
}

function permutations(string) {
  if (string.length === 1) return [string];

  const characters = string.split('');

  return permute(characters, characters.length);
}

module.exports = { permutations };
