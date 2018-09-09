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

   const n = parseInt(readLine().trim(), 10);

   const s = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map(sTemp => parseInt(sTemp, 10));

   const dm = readLine()
      .replace(/\s+$/g, '')
      .split(' ');

   const d = parseInt(dm[0], 10);

   const m = parseInt(dm[1], 10);

   const result = solveChallenge(s, d, m);

   ws.write(result + '\n');

   ws.end();
}

function solveChallenge(c, d, m) {
   let ans = 0;
   for (let i = 0; i < c.length; i++) {
      if (i + m - 1 < c.length) {
         let s = 0;
         for (let j = i; j <= i + m - 1; j++) {
            s = s + c[j];
         }
         if (s == d) {
            ans++;
         }
      }
   }
   return ans;
}

module.exports = { solveChallenge };
