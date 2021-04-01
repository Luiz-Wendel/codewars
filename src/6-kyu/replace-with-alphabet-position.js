/* Source: https://www.codewars.com/kata/546f922b54af40e1e90001da */

function alphabetPosition(text) {
  if (!text) return '';
  return text.toLowerCase().match(/[a-z]/g).map((character) => character.charCodeAt() - 96).join(' ');
}

module.exports = { alphabetPosition };
