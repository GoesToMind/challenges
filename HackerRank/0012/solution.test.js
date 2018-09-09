const test = require('tape');
const solution = require('./solution');

test('0012 - Testcase 0', t => {
   t.deepEqual(
      solution.solveChallenge(7, 11, 5, 15, [-2, 2, 1], [5, -6]),
      [1, 1],
      'It works!'
   );
   t.end();
});
