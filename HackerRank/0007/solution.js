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

   console.log(solveChallenge(n));
}

function solveChallenge(size) {
   let stairCase = '';
   for (let i = 1; i <= size; i++) {
      stairCase += '#'.repeat(i).padStart(size, ' ') + '\n';
   }
   return stairCase;
}

module.exports = { solveChallenge };
