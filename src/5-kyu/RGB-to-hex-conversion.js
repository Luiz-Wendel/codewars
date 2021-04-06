/* Source: https://www.codewars.com/kata/513e08acc600c94f01000001 */

function rgb(r, g, b) {
  return [r, g, b].map((number) => {
    if (number <= 0) return '00';
    if (number > 255) return 'FF';
    return number.toString(16).padStart(2, '0').toUpperCase();
  }).join('');
}

module.exports = { rgb };
