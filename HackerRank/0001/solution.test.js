const test = require('tape');
const solution = require('./solution');

test('0001 - Testcase 0', t => {
   t.assert(solution.solveChallenge(2, 3) === 5, 'It works!');
   t.end();
});

test('0001 - Testcase 1', t => {
   t.assert(solution.solveChallenge(100, 1000) === 1100, 'It works!');
   t.end();
});
