'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
   inputString += inputStdin;
});

process.stdin.on('end', function() {
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
   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

   const n = parseInt(readLine(), 10);

   let arr = Array(n);

   for (let i = 0; i < n; i++) {
      arr[i] = readLine()
         .split(' ')
         .map(arrTemp => parseInt(arrTemp, 10));
   }

   const result = solveChallenge(arr);

   ws.write(result + '\n');

   ws.end();
}

function solveChallenge(ar) {
   let d1 = 0;
   let d2 = 0;

   for (let i = 0; i < ar.length; i++) {
      d1 += ar[i][i];
      d2 += ar[i][ar.length - 1 - i];
   }

   return Math.abs(d1 - d2);
}

module.exports = { solveChallenge };
