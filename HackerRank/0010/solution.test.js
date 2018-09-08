const test = require('tape');
const solution = require('./solution');

test('0010 - Testcase 0', t => {
   t.deepEqual(solution.solveChallenge('07:05:45PM'), '19:05:45', 'It works!');
   t.end();
});
