const test = require('tape');
const solution = require('./solution');

test('0004 - Testcase 0', t => {
   t.assert(
      solution.solveChallenge([
         1000000001,
         1000000002,
         1000000003,
         1000000004,
         1000000005
      ]) === 5000000015,
      'It works!'
   );
   t.end();
});
