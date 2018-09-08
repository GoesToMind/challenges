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

   const s = readLine();

   let result = solveChallenge(s);

   ws.write(result + '\n');

   ws.end();
}

function solveChallenge(input) {
   var hh = parseInt(input.substr(0, 2));
   var mmss = input.substr(2, 6);
   var pm = input.substr(8) === 'PM';
   var is12 = hh === 12;
   var res = is12 ? (pm ? 12 : 0) : pm ? hh + 12 : hh;

   return (res < 10 ? '0' : '') + res + mmss;
}

module.exports = { solveChallenge };
