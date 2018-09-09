const test = require('tape');
const solution = require('./solution');

test('0017 - Testcase 0', t => {
   t.deepEqual(solution.solveChallenge(3, [1, 3, 2, 6, 1, 2]), 5, 'It works!');
   t.end();
});
