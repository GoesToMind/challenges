const test = require('tape');
const solution = require('./solution');

test('0023 - Testcase 0', t => {
   t.deepEqual(solution.solveChallenge('UDDDUDUU'), 1, 'It works!');
   t.end();
});

test('0023 - Testcase 1', t => {
   t.deepEqual(solution.solveChallenge('DDUUDDUDUUUD'), 2, 'It works!');
   t.end();
});
