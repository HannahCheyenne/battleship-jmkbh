const createShips = [
  {
    type: "Battleship",
    size: 5,
    shipId: 4,
  },
  {
    type: "Space Carrier",
    size: 4,
    shipId: 3,
  },
  {
    type: "Cruiser",
    size: 3,
    shipId: 2,
  },
  {
    type: "Destroyer",
    size: 3,
    shipId: 1,
  },
  {
    type: "Patrol Ship",
    size: 2,
    shipId: 0,
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
