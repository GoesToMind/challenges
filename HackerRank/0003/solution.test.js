const test = require('tape');
const solution = require('./solution');

test('0003 - Testcase 0', t => {
   t.assert(
      solution.solveChallenge([17, 28, 30], [99, 16, 8]).join(' ') === '2 1',
      'It works!'
   );
   t.end();
});

test('0003 - Testcase 1', t => {
   t.assert(
      solution.solveChallenge([5, 6, 7], [3, 6, 10]).join(' ') === '1 1',
      'It works!'
   );
   t.end();
});
