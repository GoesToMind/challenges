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

   const a = readLine()
      .split(' ')
      .map(aTemp => parseInt(aTemp, 10));

   let result = solveChallenge(a);

   ws.write(result + '\n');

   ws.end();
}

function solveChallenge(ar) {
   let res = 0;
   for (let i = 0; i < 100; i++) {
      let nA = i;
      let nB = i + 1;
      let tmpRes = 0;
      for (let j = 0; j < ar.length; j++) {
         if (ar[j] === nA || ar[j] === nB) {
            tmpRes++;
         }
      }
      if (tmpRes > res) {
         res = tmpRes;
      }
   }
   return res;
}

module.exports = { solveChallenge };
