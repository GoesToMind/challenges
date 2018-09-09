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
   const st = readLine().split(' ');

   const s = parseInt(st[0], 10);

   const t = parseInt(st[1], 10);

   const ab = readLine().split(' ');

   const a = parseInt(ab[0], 10);

   const b = parseInt(ab[1], 10);

   const mn = readLine().split(' ');

   const m = parseInt(mn[0], 10);

   const n = parseInt(mn[1], 10);

   const apples = readLine()
      .split(' ')
      .map(applesTemp => parseInt(applesTemp, 10));

   const oranges = readLine()
      .split(' ')
      .map(orangesTemp => parseInt(orangesTemp, 10));

   let res = solveChallenge(s, t, a, b, apples, oranges);

   console.log(res.join('\n'));
}

function solveChallenge(s, t, a, b, apples, oranges) {
   let res = [0, 0];

   for (let j = 0; j < apples.length; ++j) {
      if (apples[j] > 0 && a + apples[j] >= s && a + apples[j] <= t) {
         res[0]++;
      }
   }

   for (let j = 0; j < oranges.length; ++j) {
      if (oranges[j] < 0 && b + oranges[j] >= s && b + oranges[j] <= t) {
         res[1]++;
      }
   }

   return res;
}

module.exports = { solveChallenge };
