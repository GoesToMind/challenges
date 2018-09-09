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
      .trim()
      .split('\n')
      .map(str => str.trim());

   main();
});

function readLine() {
   return inputString[currentLine++];
}

function main() {
   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

   const n = parseInt(readLine(), 10);

   let grades = [];

   for (let gradesItr = 0; gradesItr < n; gradesItr++) {
      const gradesItem = parseInt(readLine(), 10);
      grades.push(gradesItem);
   }

   let result = solveChallenge(grades);

   ws.write(result.join('\n') + '\n');

   ws.end();
}

function solveChallenge(ar) {
   for (let i = 0; i < ar.length; ++i) {
      if (ar[i] >= 38 && ar[i] % 5 >= 3) {
         ar[i] += 5 - (ar[i] % 5);
      }
   }
   return ar;
}

module.exports = { solveChallenge };
