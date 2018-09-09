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

   const nm = readLine().split(' ');

   const n = parseInt(nm[0], 10);

   const m = parseInt(nm[1], 10);

   const a = readLine()
      .split(' ')
      .map(aTemp => parseInt(aTemp, 10));

   const b = readLine()
      .split(' ')
      .map(bTemp => parseInt(bTemp, 10));

   let total = solveChallenge(a, b);

   ws.write(total + '\n');

   ws.end();
}

function solveChallenge(a, b) {
   let c = 0;

   for (let i = 1; i <= 100; i++) {
      let k = 0;
      for (let j = 0; j < a.length; j++) {
         if (i % a[j] == 0) {
            k++;
         }
      }

      for (let j = 0; j < b.length; j++) {
         if (b[j] % i == 0) {
            k++;
         }
      }

      if (k == a.length + b.length) {
         c++;
      }
   }

   return c;
}

module.exports = { solveChallenge };
