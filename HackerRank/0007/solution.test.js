const test = require('tape');
const solution = require('./solution');

test('0007 - Testcase 0', t => {
   t.assert(
      solution.solveChallenge(6) ===
         '     #\n    ##\n   ###\n  ####\n #####\n######\n',
      'It works!'
   );
   t.end();
});
