const test = require('tape');
const solution = require('./solution');

test('0005 - Testcase 0', t => {
   t.assert(
      solution.solveChallenge([[11, 2, 4], [4, 5, 6], [10, 8, -12]]) === 15,
      'It works!'
   );
   t.end();
});
