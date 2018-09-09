const test = require('tape');
const solution = require('./solution');

test('0022 - Testcase 0', t => {
   t.deepEqual(solution.solveChallenge(6, 2), 1, 'It works!');
   t.end();
});

test('0022 - Testcase 0', t => {
   t.deepEqual(solution.solveChallenge(5, 4), 0, 'It works!');
   t.end();
});
