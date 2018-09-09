const test = require('tape');
const solution = require('./solution');

test('0024 - Testcase 0', t => {
   t.deepEqual(solution.solveChallenge(22, 75, 70), 'Cat B', 'It works!');
   t.end();
});

test('0024 - Testcase 1', t => {
   t.deepEqual(solution.solveChallenge(33, 86, 59), 'Cat A', 'It works!');
   t.end();
});

test('0024 - Testcase 2', t => {
   t.deepEqual(solution.solveChallenge(47, 29, 89), 'Cat A', 'It works!');
   t.end();
});

test('0024 - Testcase 3', t => {
   t.deepEqual(solution.solveChallenge(18, 19, 82), 'Cat B', 'It works!');
   t.end();
});

test('0024 - Testcase 4', t => {
   t.deepEqual(solution.solveChallenge(84, 17, 18), 'Cat B', 'It works!');
   t.end();
});

test('0024 - Testcase 5', t => {
   t.deepEqual(solution.solveChallenge(100, 11, 55), 'Cat B', 'It works!');
   t.end();
});

test('0024 - Testcase 6', t => {
   t.deepEqual(solution.solveChallenge(10, 10, 56), 'Mouse C', 'It works!');
   t.end();
});
