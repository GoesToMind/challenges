const test = require('tape');
const solution = require('./solution');

test('0011 - Testcase 0', t => {
   t.deepEqual(
      solution.solveChallenge([73, 67, 38, 33]),
      [75, 67, 40, 33],
      'It works!'
   );
   t.end();
});
