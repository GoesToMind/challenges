'use strict';

const fs = require('fs');

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
   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

   const arrCount = parseInt(readLine().trim(), 10);

   const arr = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map(arrTemp => parseInt(arrTemp, 10));

   const result = solveChallenge(arr);

   ws.write(result + '\n');

   ws.end();
}

function solveChallenge(ar) {
   let max = 0;
   let b = new Array(ar.length + 1);
   b.fill(0);
   for (let i = 0; i < ar.length; ++i) {
      b[ar[i]]++;
   }
   let type = 0;
   for (let i = 1; i <= ar.length; ++i) {
      if (b[i] > max) {
         max = b[i];
         type = i;
      }
   }
   return type;
}

module.exports = { solveChallenge };
