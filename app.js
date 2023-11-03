const prompt = require('prompt-sync')({ sigint: true });
const c = require('ansi-colors');
const { checkPos } = require('./checkPos');
const { checkVictory } = require('./checkVictory');

const printBoard = () => {
  console.log('\n');
  console.log(c.magenta('    [  1    2    3  ]'));
  console.log(c.blue('x  '), row1);
  console.log(c.blue('y  '), row2);
  console.log(c.blue('z  '), row3);
  console.log('\n');
};

let player1 = true;
let player2 = false;

console.log(c.yellow('Welcome to the Tic-Tac-Toe game! 👋'));
let hasPlayerWon = false;

let row1 = ['-', '-', '-'];
let row2 = ['-', '-', '-'];
let row3 = ['-', '-', '-'];

printBoard();

while (!hasPlayerWon) {
  if (player1) {
    let input1 = prompt(
      c.bgMagentaBright('Player 1') +
        ' => please select the position you want to occupy (x1, x2, x3, y1, y2, y3, z1, z2, z3): '
    );

    const output = checkPos(row1, row2, row3, input1, 'x');

    if (output === undefined) {
      printBoard();
      player2 = true;
      player1 = false;

      if (checkVictory(row1, row2, row3, 'x') === true) {
        break;
      }
    }
  }

  if (player2) {
    let input2 = prompt(
      c.bgBlueBright('Player 2') +
        ' => please select the position you want to occupy (x1, x2, x3, y1, y2, y3, z1, z2, z3): '
    );

    const output = checkPos(row1, row2, row3, input2, 'o');

    if (output === undefined) {
      printBoard();
      player1 = true;
      player2 = false;

      if (checkVictory(row1, row2, row3, 'o') === true) {
        break;
      }
    }
  }
}
