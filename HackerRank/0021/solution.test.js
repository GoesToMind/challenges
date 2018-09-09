const test = require('tape');
const solution = require('./solution');

test('0021 - Testcase 0', t => {
   t.deepEqual(
      solution.solveChallenge([10, 20, 20, 10, 10, 30, 50, 10, 20]),
      3,
      'It works!'
   );
   t.end();
});

test('0021 - Testcase 1', t => {
   t.deepEqual(
      solution.solveChallenge([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]),
      4,
      'It works!'
   );
   t.end();
});
