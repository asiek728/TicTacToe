const prompt = require('prompt-sync')({ sigint: true });
const c = require('ansi-colors');
const { printBoard } = require('./printBoard');
const { checkPos } = require('./checkPos');
const { checkPosComp } = require('./checkPosComp');
const { checkVictory } = require('./checkVictory');

let row1 = ['-', '-', '-'];
let row2 = ['-', '-', '-'];
let row3 = ['-', '-', '-'];

const clearBoard = () => {
  row1 = ['-', '-', '-'];
  row2 = ['-', '-', '-'];
  row3 = ['-', '-', '-'];
};

let hasPlayerWon = false;
let player1 = true;
let player2 = false;

console.log(c.yellow('Welcome to the Tic-Tac-Toe game! 👋'));

printBoard(row1, row2, row3);

const startTwoUsersRound = () => {
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
}

const startOneUserRound = () => {
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
  
      const validInputs = ['x1', 'y1', 'z1', 'x2', 'y2', 'z2', 'x3', 'y3', 'z3'];
      const random = Math.floor(Math.random() * validInputs.length);
      const output = checkPosComp(row1, row2, row3, validInputs[random], 'o');

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
}


startGame = () => {
  let input1 = prompt(
    'How many players will be playing today? (1 or 2) '
  );
  if (input1 == 2) {
    startGameMode2();
  }
  else if (input1 == 1) {
    startGameMode1();
  }
  else {
    console.log('Please enter 1 or 2')
    startGame();
  }

}

const startGameMode2 = () => {

  startTwoUsersRound();
  let input = 'y';
  while (input.toLowerCase() !== 'n') {
    input = prompt(c.yellow('\nDo you want to start a new game? (y or n) '));

    if (input.toLowerCase() === 'y') {
      player1 = true;
      player2 = false;
      clearBoard();
      printBoard(row1, row2, row3);
      startTwoUsersRound();
    }
    else if (input.toLowerCase() === 'n') {
      console.log(c.greenBright('\nThanks for playing! 👋'));
    }
    else {
      console.log('Please enter y or n')
    }
  }
};




const startGameMode1 = () => {

  startOneUserRound();
  let input = 'y';
  while (input.toLowerCase() !== 'n') {
    input = prompt(
      'Do you want to start a new game? (y or n) '
    );

    if (input.toLowerCase() === 'y') {
      player1 = true;
      player2 = false;
      clearBoard();
      printBoard(row1, row2, row3);
      startOneUserRound();
    }
    else if (input.toLowerCase() === 'n') {
      console.log('Thanks for playing! 👋')
    }
    else {
      console.log('Please enter y or n')
    }
  }

}



startGame();
