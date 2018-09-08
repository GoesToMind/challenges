'use strict';

const fs = require('fs');

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
   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

   const arCount = parseInt(readLine(), 10);

   const ar = readLine()
      .split(' ')
      .map(arTemp => parseInt(arTemp, 10));

   let result = solveChallenge(ar);

   ws.write(result + '\n');

   ws.end();
}

function solveChallenge(ar) {
   ar = ar.sort((n1, n2) => n1 - n2);

   for (let i = 0; i < ar.length; i++) {
      if (ar[i] == ar[ar.length - 1]) {
         return ar.length - i;
      }
   }
}

module.exports = { solveChallenge };
