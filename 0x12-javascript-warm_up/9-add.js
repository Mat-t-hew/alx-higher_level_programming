#!/usr/bin/node

const sum = (function (a, b) {
  return parseInt(a) + parseInt(b);
})(process.argv[2], process.argv[3]);

console.log(sum);
