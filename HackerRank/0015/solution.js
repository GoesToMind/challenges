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

   const scores = readLine()
      .split(' ')
      .map(scoresTemp => parseInt(scoresTemp, 10));

   const result = solveChallenge(scores);

   ws.write(result.join(' ') + '\n');

   ws.end();
}

function solveChallenge(ar) {
   let res = [0, 0];
   let l = 0;
   let h = 0;

   for (let i = 0; i < ar.length; ++i) {
      if (i > 0) {
         if (ar[i] > h) {
            res[0]++;
            h = ar[i];
         }

         if (ar[i] < l) {
            res[1]++;
            l = ar[i];
         }
      } else {
         h = ar[i];
         l = ar[i];
      }
   }

   return res;
}

module.exports = { solveChallenge };
