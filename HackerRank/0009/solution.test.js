const test = require('tape');
const solution = require('./solution');

test('0009 - Testcase 0', t => {
   t.deepEqual(solution.solveChallenge([3, 2, 1, 3]), 2, 'It works!');
   t.end();
});
