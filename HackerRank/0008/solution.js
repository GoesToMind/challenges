'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
   inputString += inputStdin;
});

process.stdin.on('end', _ => {
   inputString = inputString
      .replace(/\s*$/, '')
      .split('\n')
      .map(str => str.replace(/\s*$/, ''));

   main();
});

function readLine() {
   return inputString[currentLine++];
}

function main() {
   const arr = readLine()
      .split(' ')
      .map(arrTemp => parseInt(arrTemp, 10));
   console.log(solveChallenge(arr).join(' '));
}

function solveChallenge(ar) {
   ar = ar.sort((n1, n2) => n1 - n2);
   let sum = ar.reduce((a, b) => a + b);

   let res = [0, 0];
   res[0] = sum - ar[ar.length - 1];
   res[1] = sum - ar[0];
   return res;
}

module.exports = { solveChallenge };
