const test = require('tape');
const solution = require('./solution');

test('0025 - Testcase 0', t => {
   t.deepEqual(
      solution.solveChallenge([[4, 9, 2], [3, 5, 7], [8, 1, 5]]),
      1,
      'It works!'
   );
   t.end();
});

test('0025 - Testcase 1', t => {
   t.deepEqual(
      solution.solveChallenge([[4, 8, 2], [4, 5, 7], [6, 1, 6]]),
      4,
      'It works!'
   );
   t.end();
});
