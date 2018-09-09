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

   const p = parseInt(readLine(), 10);

   let result = solveChallenge(n, p);

   ws.write(result + '\n');

   ws.end();
}

function solveChallenge(n, p) {
   if (n % 2 == 0) {
      n++;
   }
   let pag1 = Math.trunc(Math.abs(p / 2));
   let pag2 = Math.trunc(Math.abs((p - n) / 2));
   return pag1 < pag2 ? pag1 : pag2;
}

module.exports = { solveChallenge };
