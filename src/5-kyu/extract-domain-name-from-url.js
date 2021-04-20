/* Sourece: https://www.codewars.com/kata/514a024011ea4fb54200004b */

function domainName(url) {
  return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0];
}

module.exports = { domainName };
