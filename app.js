const prompt = require('prompt-sync')({ sigint: true });
const c = require('ansi-colors');
const { printBoard } = require('./printBoard');
const { checkPos } = require('./checkPos');
const { checkVictory } = require('./checkVictory');

let row1 = ['-', '-', '-'];
let row2 = ['-', '-', '-'];
let row3 = ['-', '-', '-'];

let hasPlayerWon = false;
let player1 = true;
let player2 = false;

console.log(c.yellow('Welcome to the Tic-Tac-Toe game! 👋'));

printBoard(row1, row2, row3);

while (!hasPlayerWon) {
  if (player1) {
    let input1 = prompt(
      c.bgMagentaBright('Player 1') +
        ' => please select the position you want to occupy (x1, x2, x3, y1, y2, y3, z1, z2, z3): '
    );

    const output = checkPos(row1, row2, row3, input1, 'x');

    if (output === undefined) {
      printBoard(row1, row2, row3);
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
      printBoard(row1, row2, row3);
      player1 = true;
      player2 = false;

      if (checkVictory(row1, row2, row3, 'o') === true) {
        break;
      }
    }
  }
}
