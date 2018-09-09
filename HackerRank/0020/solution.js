'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
   inputString += inputStdin;
});

process.stdin.on('end', function() {
   inputString = inputString.split('\n');

   main();
});

function readLine() {
   return inputString[currentLine++];
}

function main() {
   const nk = readLine()
      .replace(/\s+$/g, '')
      .split(' ');

   const n = parseInt(nk[0], 10);

   const k = parseInt(nk[1], 10);

   const bill = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map(billTemp => parseInt(billTemp, 10));

   const b = parseInt(readLine().trim(), 10);

   console.log(solveChallenge(k, bill, b));
}

function solveChallenge(k, ar, b) {
   let sum = 0;

   for (let i = 0; i < ar.length; i++) {
      if (i != k) {
         sum += ar[i];
      }
   }

   let vr = b - sum / 2;

   return vr == 0 ? 'Bon Appetit' : vr;
}

module.exports = { solveChallenge };
