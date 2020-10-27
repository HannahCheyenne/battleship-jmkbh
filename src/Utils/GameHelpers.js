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

const hoverUpdate = ({ grid, row, col, rotated, type }) => {
  const bool = type === "enter" ? true : false;
  const position = grid[row][col];
  position.hover = bool; 
  return grid;
};
module.exports = {
  createShips,
  hoverUpdate,
};
