const test = require('tape');
const solution = require('./solution');

test('0008 - Testcase 0', t => {
   t.deepEqual(solution.solveChallenge([1, 2, 3, 4, 5]), [10, 14], 'It works!');
   t.end();
});

test('0008 - Testcase 1', t => {
   t.deepEqual(
      solution.solveChallenge([7, 69, 2, 221, 8974]),
      [299, 9271],
      'It works!'
   );
   t.end();
});
