const test = require('tape');
const solution = require('./solution');

test('0002 - Testcase 0', t => {
   t.assert(solution.solveChallenge([1, 2, 3, 4, 10, 11]) === 31, 'It works!');
   t.end();
});
