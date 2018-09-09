const test = require('tape');
const solution = require('./solution');

test('0018 - Testcase 0', t => {
   t.deepEqual(solution.solveChallenge([1, 4, 4, 4, 5, 3]), 4, 'It works!');
   t.end();
});

test('0018 - Testcase 1', t => {
   t.deepEqual(
      solution.solveChallenge([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]),
      3,
      'It works!'
   );
   t.end();
});
