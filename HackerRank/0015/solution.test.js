const test = require('tape');
const solution = require('./solution');

test('0015 - Testcase 0', t => {
   t.deepEqual(
      solution.solveChallenge([10, 5, 20, 20, 4, 5, 2, 25, 1]),
      [2, 4],
      'It works!'
   );
   t.end();
});

test('0015 - Testcase 1', t => {
   t.deepEqual(
      solution.solveChallenge([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]),
      [4, 0],
      'It works!'
   );
   t.end();
});
