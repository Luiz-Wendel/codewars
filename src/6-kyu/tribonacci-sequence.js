/* Source: https://www.codewars.com/kata/556deca17c58da83c00002db */

function tribonacci(signature, n) {
  while (signature.length < n) {
    signature.push(signature.slice(-3).reduce((acc, cur) => acc + cur));
  }

  return signature.slice(0, n);
}

module.exports = { tribonacci };
