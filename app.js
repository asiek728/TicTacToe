const prompt = require('prompt-sync')({ sigint: true });
const { checkPos } = require('./checkPos');
const { checkVictory } = require('./checkVictory');

const printBoard = () => {
  console.log(row1);
  console.log(row2);
  console.log(row3);
};

let player1 = true;
let player2 = false;

console.log('hello');
let correctChoice = false;
let hasPlayerWon = false;

let row1 = ['-', '-', '-'];
let row2 = ['-', '-', '-'];
let row3 = ['-', '-', '-'];

while (!hasPlayerWon) {
  if (player1) {
    let input1 = prompt(
      'Player 1 => please select the position you want to occupy (x1, x2, x3, y1, y2, y3): '
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
      'Player 2 => please select the position you want to occupy (x1, x2, x3, y1, y2, y3): '
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
