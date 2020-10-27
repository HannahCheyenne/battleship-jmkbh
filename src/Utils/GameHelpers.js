const createShips = [
  {
    type: "Battleship",
    size: 5,
    positions: [],
  },
  {
    type: "Space Carrier",
    size: 4,
    positions: [],
  },
  {
    type: "Cruiser",
    size: 3,
    positions: [],
  },
  {
    type: "Destroyer",
    size: 3,
    positions: [],
  },
  {
    type: "Patrol Ship",
    size: 2,
    positions: [],
  },
];

const dictionary = {
  0: null,
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
  9: "I",
  10: "J",
};
const hoverUpdate = ({ grid, row, col, rotated, type }) => {
  const bool = type === "enter" ? true : false;
  const position = grid[row][col];
  position.hover = bool; 
  return grid;
};
const classUpdate = square => {
  let classes = "grid-square ";
  if (square.status !== "empty" && square.hover) {
    classes += "active-occupied";
  } else if (square.hover) {
    classes += "active";
  } else if (square.status === "hit") {
    classes += "enemy-hit";
  } else if (square.status === "miss") {
    classes += "enemy-miss";
  } else if (square.status === "sunk") {
    classes += "enemy-sunk";
  }
  return classes;
};
const boardObject = () => {
  let grid = [];
  let gridArr = []
  let length = 8;
  for (let i = 0; i < length; i++) {
    grid.push({ status: "empty", hover: false, hit: false, type: null });
  }
  for(let j = 0; j< length; j++) {
    gridArr.push(grid)
  }
  return gridArr
};
let boardObj = boardObject()
module.exports = {
  createShips,
  dictionary,
  hoverUpdate,
  boardObject,
  boardObj
};
