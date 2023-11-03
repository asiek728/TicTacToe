const c = require('ansi-colors');

const checkVictory = (row1, row2, row3, player) => {
  if (
    (row1[0] === row1[1] && row1[0] === row1[2] && row1[0] === player) ||
    (row2[0] === row2[1] && row2[0] === row2[2] && row2[0] === player) ||
    (row3[0] === row3[1] && row3[0] === row3[2] && row3[0] === player) ||
    (row1[0] === row2[0] && row1[0] === row3[0] && row1[0] === player) ||
    (row1[1] === row2[1] && row1[1] === row3[1] && row1[1] === player) ||
    (row1[2] === row2[2] && row1[2] === row3[2] && row1[2] === player) ||
    (row1[0] === row2[1] && row1[0] === row3[2] && row1[0] === player) ||
    (row1[2] === row2[1] && row1[2] === row3[0] && row1[2] === player)
  ) {
    if (player === 'x') {
      console.log(c.bgMagentaBright('Player 1') + ' has won the game! 🎉');
      return true;
    } else if (player === 'o') {
      console.log(c.bgBlueBright('Player 2') + ' has won the game! 🎉');
      return true;
    }
  }

  return false;
};

module.exports = { checkVictory };
