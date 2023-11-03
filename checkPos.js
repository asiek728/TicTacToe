const c = require('ansi-colors');

const validInputs = ['x1', 'y1', 'z1', 'x2', 'y2', 'z2', 'x3', 'y3', 'z3'];

const checkPos = (row1, row2, row3, position, player) => {
  let inputtedPos = position.toLowerCase();
  if (!inputtedPos) {
    console.log(c.red(`\nERROR: you must enter a value!\n`));
    return false;
  } else if (!validInputs.includes(inputtedPos)) {
    console.log(c.red(`\nERROR: position entered is invalid!\n`));
    return false;
  } else if (inputtedPos === 'x1') {
    if (row1[0] === '-') {
      row1[0] = player;
    } else {
      console.log(c.red(`\nThis position is already taken!\n`));
      return false;
    }
  } else if (inputtedPos === 'x2') {
    if (row1[1] === '-') {
      row1[1] = player;
    } else {
      console.log(c.red(`\nThis position is already taken!\n`));
      return false;
    }
  } else if (inputtedPos === 'x3') {
    if (row1[2] === '-') {
      row1[2] = player;
    } else {
      console.log(c.red(`\nThis position is already taken!\n`));
      return false;
    }
  } else if (inputtedPos === 'y1') {
    if (row2[0] === '-') {
      row2[0] = player;
    } else {
      console.log(c.red(`\nThis position is already taken!\n`));
      return false;
    }
  } else if (inputtedPos === 'y2') {
    if (row2[1] === '-') {
      row2[1] = player;
    } else {
      console.log(c.red(`\nThis position is already taken!\n`));
      return false;
    }
  } else if (inputtedPos === 'y3') {
    if (row2[2] === '-') {
      row2[2] = player;
    } else {
      console.log(c.red(`\nThis position is already taken!\n`));
      return false;
    }
  } else if (inputtedPos === 'z1') {
    if (row3[0] === '-') {
      row3[0] = player;
    } else {
      console.log(c.red(`\nThis position is already taken!\n`));
      return false;
    }
  } else if (inputtedPos === 'z2') {
    if (row3[1] === '-') {
      row3[1] = player;
    } else {
      console.log(c.red(`\nThis position is already taken!\n`));
      return false;
    }
  } else if (inputtedPos === 'z3') {
    if (row3[2] === '-') {
      row3[2] = player;
    } else {
      console.log(c.red(`\nThis position is already taken!\n`));
      return false;
    }
  }
  !inputtedPos;
};

module.exports = { checkPos };
