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

   const n = parseInt(readLine(), 10);

   const ar = readLine()
      .split(' ')
      .map(arTemp => parseInt(arTemp, 10));

   let result = solveChallenge(ar);

   ws.write(result + '\n');

   ws.end();
}

function solveChallenge(ar) {
   let pair = 0;

   for (let i = 0; i < ar.length; i++) {
      for (let j = i + 1; j < ar.length; j++) {
         if (-1 != ar[i] && -1 != ar[j] && ar[i] == ar[j]) {
            pair++;
            ar[j] = -1;
            ar[i] = -1;
            break;
         }
      }
   }

   return pair;
}

module.exports = { solveChallenge };
