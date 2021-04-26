/* Source: https://www.codewars.com/kata/52449b062fb80683ec000024 */

function generateHashtag(str) {
  const result = str.trim().replace(/\s\s+/g, ' ').split(' ').map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join('');

  return result.length === 0 || result.length >= 140 ? false : `#${result}`;
}

module.exports = { generateHashtag };
