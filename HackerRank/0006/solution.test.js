const test = require('tape');
const solution = require('./solution');

test('0006 - Testcase 0', t => {
   t.deepEqual(
      solution.solveChallenge([-4, 3, -9, 0, 4, 1]),
      ['0.500000', '0.333333', '0.166667'],
      'It works!'
   );
   t.end();
});
