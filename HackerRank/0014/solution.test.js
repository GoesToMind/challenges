const test = require('tape');
const solution = require('./solution');

test('0014 - Testcase 0', t => {
   t.deepEqual(solution.solveChallenge([2, 4], [16, 32, 96]), 3, 'It works!');
   t.end();
});

test('0014 - Testcase 1', t => {
   t.deepEqual(solution.solveChallenge([3, 4], [24, 48]), 2, 'It works!');
   t.end();
});
