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

   let s = Array(3);

   for (let i = 0; i < 3; i++) {
      s[i] = readLine()
         .split(' ')
         .map(sTemp => parseInt(sTemp, 10));
   }

   const result = solveChallenge(s);

   ws.write(result + '\n');

   ws.end();
}

function solveChallenge(square) {
   let squares = [
      [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
      [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
      [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
      [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
      [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
      [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
      [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
      [[8, 3, 4], [1, 5, 9], [6, 7, 2]]
   ];

   let dist = squares.map(vr => {
      return findDist(square, vr);
   });

   return Math.min.apply(null, dist);
}

function findDist(input, vr) {
   let tmpDist = 0;
   for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
         tmpDist += Math.abs(input[i][j] - vr[i][j]);
      }
   }
   return tmpDist;
}

module.exports = { solveChallenge };
