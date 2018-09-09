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

   const s = readLine();

   let result = solveChallenge(s);

   ws.write(result + '\n');

   ws.end();
}

function solveChallenge(c) {
   let list = 0;
   let valley = 0;
   for (let i = 0; i < c.length; i++) {
      if (c[i] == 'U') list++;
      if (c[i] == 'D') list--;
      if (list == 0 && c[i] == 'U') {
         valley++;
      }
   }
   return valley;
}

module.exports = { solveChallenge };
