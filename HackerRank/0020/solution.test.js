const test = require('tape');
const solution = require('./solution');

test('0020 - Testcase 0', t => {
   t.deepEqual(solution.solveChallenge(1, [3, 10, 2, 9], 12), 5, 'It works!');
   t.end();
});

test('0020 - Testcase 1', t => {
   t.deepEqual(
      solution.solveChallenge(1, [3, 10, 2, 9], 7),
      'Bon Appetit',
      'It works!'
   );
   t.end();
});
