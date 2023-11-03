const c = require('ansi-colors');

const printBoard = (row1, row2, row3) => {
  console.log('\n');
  console.log(c.magenta('    [  1    2    3  ]'));
  console.log(c.blue('x  '), row1);
  console.log(c.blue('y  '), row2);
  console.log(c.blue('z  '), row3);
  console.log('\n');
};

module.exports = { printBoard };
