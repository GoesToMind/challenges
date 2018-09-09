const test = require('tape');
const solution = require('./solution');

test('0026 - Testcase 0', t => {
   t.deepEqual(solution.solveChallenge([4, 6, 5, 3, 3, 1]), 3, 'It works!');
   t.end();
});

test('0026 - Testcase 1', t => {
   t.deepEqual(solution.solveChallenge([1, 2, 2, 3, 1, 2]), 5, 'It works!');
   t.end();
});
