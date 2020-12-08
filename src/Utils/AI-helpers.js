/* eslint-disable eqeqeq */
const math = require("mathjs");

const ai = {
  shipLength(shipId) {
    if (shipId === 4) {
      return 5;
    } else if (shipId === 3) {
      return 4;
    } else if (shipId === 2) {
      return 3;
    } else if (shipId === 1) {
      return 3;
    } else if (shipId === 0) {
      return 2;
    } else {
      return 0;
    }
  },

  scrubAnswerBoard(board, mask) {
    let newBoard = math.clone(board);
    let width = board._data.length;
    let length = board._data[0].length;

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < length; j++) {
        if (mask[i][j] === 1) {
          if (newBoard._data[i][j] <= 4 || newBoard._data[i][j] === 8) {
            newBoard._data[i][j] = 1;
          } else newBoard._data[i][j] = 0;
        } else {
          newBoard._data[i][j] = 0.5;
        }
      }
    }
    return newBoard;
  },

  scrubVisibleBoard(board, mask) {
    let newBoard = math.clone(board);
    let width = board._data.length;
    let length = board._data[0].length;

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < length; j++) {
        if (mask[i][j] === 1) {
          if (newBoard._data[i][j] <= 6 || newBoard._data[i][j] === 8) {
            newBoard._data[i][j] = 1;
          }
          if (newBoard._data[i][j] === 7) newBoard._data[i][j] = 0;
        } else newBoard._data[i][j] = 0.5;
      }
    }
    return newBoard;
  },

  generateBoard() {
    let board = [
      [7, 7, 7, 7, 7, 7, 7, 7],
      [7, 7, 7, 7, 7, 7, 7, 7],
      [7, 7, 7, 7, 7, 7, 7, 7],
      [7, 7, 7, 7, 7, 7, 7, 7],
      [7, 7, 7, 7, 7, 7, 7, 7],
      [7, 7, 7, 7, 7, 7, 7, 7],
      [7, 7, 7, 7, 7, 7, 7, 7],
      [7, 7, 7, 7, 7, 7, 7, 7],
    ];

    for (let shipId = 4; shipId >= 0; shipId--) {
      board = this.placeShip(board, shipId);
    }
    return board;
  },

  placeShip(board, shipId) {
    const shipLength = this.shipLength(shipId);
    let allClear = true;
    let dirX = 0;
    let dirY = 0;
    let anchorX = 0;
    let anchorY = 0;
    let validAnchor = false;
    let validPlacement = false;

    while (!validPlacement) {
      allClear = true;
      dirX = 0;
      dirY = 0;
      validAnchor = false;
      while (!validAnchor) {
        anchorX = Math.floor(Math.random() * 8); //(9 - shipLength) + shipLength - 1);
        anchorY = Math.floor(Math.random() * 8); //(9 - shipLength) + shipLength - 1);
        if (board[anchorX][anchorY] === 7) {
          validAnchor = true;
        }
      }
      if (this.coinFlip() == 1) {
        if (this.coinFlip() == 1) {
          dirX = -1;
        } else {
          dirX = 1;
        }
      } else {
        if (this.coinFlip()) {
          dirY = -1;
        } else {
          dirY = 1;
        }
      }
      for (let i = 0; i < shipLength; i++) {
        let x = anchorX + i * dirX;
        let y = anchorY + i * dirY;
        if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
          if (board[x][y] !== 7) {
            allClear = false;
          } else {
          }
        } else {
          allClear = false;
        }
      }
      if (allClear) {
        validPlacement = true;
        for (let i = 0; i < shipLength; i++) {
          let x = anchorX + i * dirX;
          let y = anchorY + i * dirY;
          board[x][y] = shipId;
        }
      }
    }
    return board;
  },

  coinFlip() {
    return parseInt(Math.random() * 2) + 1;
  },

  getMove(nn, mask) {
    let high = 0;
    let IHigh = 0;
    let JHigh = 0;

    for (let i = 0; i < nn.output._data.length; i++) {
      for (let j = 0; j < nn.output._data[0].length; j++) {
        if (mask[i][j] === 0) {
          if (nn.output._data[i][j] > high) {
            high = nn.output._data[i][j];
            IHigh = i;
            JHigh = j;
          }
        }
      }
    }

    return { x: IHigh, y: JHigh };
  },

  getRandoMove(nn, mask) {
    let high = 0;
    let IHigh = 0;
    let JHigh = 0;

    for (let i = 0; i < nn.output._data.length; i++) {
      for (let j = 0; j < nn.output._data[0].length; j++) {
        if (mask[i][j] === 0) {
          high = nn.output._data[i][j];
          IHigh = i;
          JHigh = j;
        }
      }
    }

    if (nn.y._data[IHigh][JHigh] === 1) {
      return [true, high, IHigh, JHigh];
      //console.log("          HIT! :D      ");
    } else {
      return [false, high, IHigh, JHigh];
      //console.log("                   Miss :(                ");
    }
  },

  randomizeMask(board) {
    let mask = math.clone(board);
    let validHit = false;
    let validMiss = false;
    while (validHit === false || validMiss === false) {
      for (let i = 0; i < mask._data.length; i++) {
        for (let j = 0; j < mask._data[0].length; j++) {
          if (Math.random() > 0.95) {
            mask._data[i][j] = 0;
            if (board._data[i][j] === 1) {
              validHit = true;
            } else {
              validMiss = true;
            }
          } else {
            mask._data[i][j] = 1;
          }
        }
      }
    }

    return mask._data;
  },

  getMask(board) {
    let mask = math.clone(board);
    for (let i = 0; i < mask._data.length; i++) {
      for (let j = 0; j < mask._data[0].length; j++) {
        if (mask._data[i][j] === 8 || mask._data[i][j] === 9) {
          mask._data[i][j] = 1;
        } else mask._data[i][j] = 0;
      }
    }

    return mask._data;
  },
};

module.exports = ai;
