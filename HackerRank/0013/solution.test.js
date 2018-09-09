const test = require('tape');
const solution = require('./solution');

test('0013 - Testcase 0', t => {
   t.deepEqual(solution.solveChallenge(0, 3, 4, 2), 'YES', 'It works!');
   t.end();
});

test('0013 - Testcase 1', t => {
   t.deepEqual(solution.solveChallenge(0, 2, 5, 3), 'NO', 'It works!');
   t.end();
});
