const test = require('tape');
const solution = require('./solution');

test('0016 - Testcase 0', t => {
   t.deepEqual(solution.solveChallenge([1, 2, 1, 3, 2], 3, 2), 2, 'It works!');
   t.end();
});

test('0016 - Testcase 1', t => {
   t.deepEqual(
      solution.solveChallenge([1, 1, 1, 1, 1, 1], 3, 2),
      0,
      'It works!'
   );
   t.end();
});

test('0016 - Testcase 2', t => {
   t.deepEqual(solution.solveChallenge([4], 4, 1), 1, 'It works!');
   t.end();
});
