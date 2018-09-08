'use strict';

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
   const n = parseInt(readLine(), 10);

   const arr = readLine()
      .split(' ')
      .map(arrTemp => parseInt(arrTemp, 10));

   console.log(solveChallenge(arr).join('\n'));
}

function solveChallenge(ar) {
   let res = [0, 0, 0];

   for (let i = 0; i < ar.length; i++) {
      if (ar[i] > 0) {
         res[0]++;
      } else if (ar[i] < 0) {
         res[1]++;
      } else {
         res[2]++;
      }
   }
   return res.map(x => (x / ar.length).toPrecision(6));
}

module.exports = { solveChallenge };
