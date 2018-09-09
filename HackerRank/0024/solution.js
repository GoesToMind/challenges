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

   const q = parseInt(readLine(), 10);

   for (let qItr = 0; qItr < q; qItr++) {
      const xyz = readLine().split(' ');

      const x = parseInt(xyz[0], 10);

      const y = parseInt(xyz[1], 10);

      const z = parseInt(xyz[2], 10);

      let result = solveChallenge(x, y, z);

      ws.write(result + '\n');
   }

   ws.end();
}

function solveChallenge(x, y, z) {
   let catA = Math.abs(x - z);
   let catB = Math.abs(y - z);

   if (catA == catB) {
      return 'Mouse C';
   }

   if (catA < catB) {
      return 'Cat A';
   } else {
      return 'Cat B';
   }
}

module.exports = { solveChallenge };
