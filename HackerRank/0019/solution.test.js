const test = require('tape');
const solution = require('./solution');

test('0019 - Testcase 0', t => {
   t.deepEqual(solution.solveChallenge(2017), '13.09.2017', 'It works!');
   t.end();
});

test('0019 - Testcase 1', t => {
   t.deepEqual(solution.solveChallenge(2016), '12.09.2016', 'It works!');
   t.end();
});

test('0019 - Testcase 2', t => {
   t.deepEqual(solution.solveChallenge(1800), '12.09.1800', 'It works!');
   t.end();
});
