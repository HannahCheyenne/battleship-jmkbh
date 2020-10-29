import React, { Component } from "react";
import "./playerboardrender.css";
import boom from "../../Images/boom.png";
import miss from "../../Images/miss.png";
import HealthBar from "../GameBoard/HealthBar/HealthBar";
// import battleship from "../../Images/battleship.png";
// import carrier from "../../Images/carrier.png";
// import patrolboat from "../../Images/patrolboat.png";
// import destroyer from "../../Images/destroyer.png";
// import submarine from "../../Images/submarine.png";
import createShips from "../../Utils/GameHelpers";
import TriggerTest from "./TriggerTest";
import Audio from "../../services/audio";

import BattleshipAPI from "../../services/battleship-api-service";

export default class PlayerBoardRender extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      board: [
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
      ],
      savedBoard: [
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
      ],
      ships: createShips,
      currX: 0,
      currY: 0,
      anchorX: 0,
      anchorY: 0,
      isAnchor: false,
      shipId: 4,
      shipsToPlace: [1, 1, 1, 1, 1],
      validPlacement: false,
    };
  }

  resetBoard = (e) => {
    e.preventDefault();
    let savedBoard = this.state.savedBoard;
    const board = this.state.board;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        board[i][j] = savedBoard[i][j];
      }
    }
    this.setState({ board: board, validPlacement: false });
  };

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
  }

  deepCopy = (arr) => {
    let copy = [];
    arr.forEach((elem) => {
      if (Array.isArray(elem)) {
        copy.push(this.deepCopy(elem));
      }
    });
    return copy;
  };

  checkCells = (anchorX, anchorY, dirX, dirY) => {
    const shipId = this.state.shipId;
    const shipLength = this.shipLength(shipId);
    let newBoard = [...this.state.board];
    let allClear = true;

    for (let i = 0; i < shipLength; i++) {
      let x = anchorX + i * dirX;
      let y = anchorY + i * dirY;
      if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
        if (newBoard[x][y] !== 7) {
          allClear = false;
        }
      } else {
        allClear = false;
      }
    }
    if (this.state.shipsToPlace[shipId] === 0) {
      allClear = false;
    }
    if (allClear) {
      for (let i = 0; i < shipLength; i++) {
        let x = anchorX + i * dirX;
        let y = anchorY + i * dirY;
        newBoard[x][y] = 6;
      }
    }
    this.setState({ board: [...newBoard], validPlacement: true });
  };

  findNextShip(arr) {
    let index = arr
      .slice()
      .reverse()
      .findIndex((v) => v === 1);
    var count = arr.length - 1;
    var finalIndex = index >= 0 ? count - index : index;
    return finalIndex;
  }

  updateBoard = () => {
    Audio.positioned();
    let { board, savedBoard, shipId, shipsToPlace } = this.state;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j] === 6) {
          savedBoard[i][j] = shipId;
        }
      }
    }

    shipsToPlace[shipId] = 0;
    shipId = this.findNextShip(shipsToPlace);

    this.setState({
      savedBoard: savedBoard,
      isAnchor: false,
      validPlacement: false,
      shipsToPlace: shipsToPlace,
      shipId: shipId,
    });
  };

  placementMouseover = (e) => {
    e.preventDefault();
    let newBoard = [...this.state.board];
    let split = e.target.id.split(".");
    let newX = Number(split[0]);
    let newY = Number(split[1]);
    let anchorY = this.state.anchorY;
    let anchorX = this.state.anchorX;
    //console.log("x", newX, "y", newY);

    if (newBoard[newX][newY]) {
      this.setState({
        x: newX,
        y: newY,
      });
    }

    if (this.state.isAnchor) {
      const diffX = anchorX - newX;
      const diffY = anchorY - newY;
      if (!(diffX !== 0 && diffY !== 0)) {
        if (Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX > 0) {
            //up
            this.checkCells(anchorX, anchorY, -1, 0);
          } else if (diffX < 0) {
            //down
            this.checkCells(anchorX, anchorY, 1, 0);
          }
        } else if (Math.abs(diffY) > Math.abs(diffX)) {
          if (diffY > 0) {
            //left
            this.checkCells(anchorX, anchorY, 0, -1);
          } else if (diffY < 0) {
            //right
            this.checkCells(anchorX, anchorY, 0, 1);
          }
        }
      }
    }
  };

  selectShip = (e) => {
    e.preventDefault();
    let newSelection = parseInt(e.target.id);
    this.setState({
      shipId: newSelection,
    });
  };

  placementOnClick = (e) => {
    e.preventDefault();
    let isAnchor = this.state.isAnchor;
    const x = this.state.x;
    const y = this.state.y;

    if (!isAnchor) {
      Audio.click();
      let id = `${x}.${y}`;
      const element = document.getElementById(id);
      element.className += " selected";
      this.setState({
        anchorX: x,
        anchorY: y,
        isAnchor: true,
      });
    } else {
      const anchorX = this.state.anchorX;
      const anchorY = this.state.anchorY;
      if (x === anchorX && y === anchorY) {
        let id = `${x}.${y}`;
        const element = document.getElementById(id);
        element.className = "slot";
        this.setState({
          anchorX: 0,
          anchorY: 0,
          isAnchor: false,
        });
      } else {
        if (this.state.validPlacement) {
          this.updateBoard();
        }
      }
    }
  };

  generateBoard = (e) => {
    e.preventDefault()
    BattleshipAPI.generateBoard().then((data) => {
      const board = data;
      this.setState({
        savedBoard: board,
        shipsToPlace: [0, 0, 0, 0, 0],
        validPlacement: true,
      });
    });
  };

  newGameSubmit = () => {};

  reset = (e) => {
    e.preventDefault();
    this.clearBoard();
  };
  clearBoard = () => {
    this.setState({
      id: "",
      board: [
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
      ],
      savedBoard: [
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
      ],
      ships: createShips,
      currX: 0,
      currY: 0,
      anchorX: 0,
      anchorY: 0,
      isAnchor: false,
      shipId: 4,
      shipsToPlace: [1, 1, 1, 1, 1],
      validPlacement: false,
    });
  };
  validateAllPlaced() {
    const remainingShips = this.state.shipsToPlace.reduce((a, c) => a + c);
    if (remainingShips !== 0) {
      return "Must place all ships";
    }
  }
  render() {
    const { ships, shipsToPlace, savedBoard } = this.state;
    const board = [...this.state.board];
    const H = <img className="image" src={boom} alt="hit" />;
    const M = <img className="image" src={miss} alt="miss" />;

    //console.log("State Updated: ", this.state);

    return (
      <div className="playerContainer">
        <div className="shipcontainer">
          <div className="buttonBorder">
            {ships.createShips.map((i) => (
              <button
                className={`ship active${shipsToPlace[i.shipId]}`}
                onClick={this.selectShip}
                id={`${i.shipId}`}
                key={`${i.shipId}`}
              >
                {i.type}
              </button>
            ))}
            <button className="shipContainerButtons" onClick={this.reset}>
              Reset Board
            </button>

            <button
              className="shipContainerButtons"
              onClick={this.generateBoard}
            >
              Generate
            </button>

            <button
              className="shipContainerButtons"
              disabled={this.validateAllPlaced()}
              onClick={() => this.props.newGame(savedBoard)}
            >
              Start game!
            </button>
          </div>
        </div>
        <span>
          <div>Health</div>
          <div className="boardContainer">
            <div className="board">
              {!this.props.disabled && (
                <TriggerTest func={this.clearBoard}></TriggerTest>
              )}

              {board[0].map((i, index) => (
                <button
                  onMouseOut={this.resetBoard}
                  onClick={this.placementOnClick}
                  onMouseEnter={this.placementMouseover}
                  key={`0.${index}`}
                  id={`0.${index}`}
                  value={i}
                  className={`slot bg${i}`}
                  disabled={this.props.disabled ? "disabled" : ""}
                >
                  {i === 9 ? M : i === 8 ? H : ""}{" "}
                </button>
              ))}
              {board[1].map((i, index) => (
                <button
                  onMouseOut={this.resetBoard}
                  onClick={this.placementOnClick}
                  onMouseEnter={this.placementMouseover}
                  key={`1.${index}`}
                  id={`1.${index}`}
                  value={i}
                  className={`slot bg${i}`}
                  disabled={this.props.disabled ? "disabled" : ""}
                >
                  {i === 9 ? M : i === 8 ? H : ""}
                </button>
              ))}
              {board[2].map((i, index) => (
                <button
                  onMouseOut={this.resetBoard}
                  onClick={this.placementOnClick}
                  onMouseEnter={this.placementMouseover}
                  key={`2.${index}`}
                  id={`2.${index}`}
                  value={i}
                  className={`slot bg${i}`}
                  disabled={this.props.disabled ? "disabled" : ""}
                >
                  {i === 9 ? M : i === 8 ? H : ""}
                </button>
              ))}
              {board[3].map((i, index) => (
                <button
                  onMouseOut={this.resetBoard}
                  onClick={this.placementOnClick}
                  onMouseEnter={this.placementMouseover}
                  key={`3.${index}`}
                  id={`3.${index}`}
                  value={i}
                  className={`slot bg${i}`}
                  disabled={this.props.disabled ? "disabled" : ""}
                >
                  {i === 9 ? M : i === 8 ? H : ""}
                </button>
              ))}
              {board[4].map((i, index) => (
                <button
                  onMouseOut={this.resetBoard}
                  onClick={this.placementOnClick}
                  onMouseEnter={this.placementMouseover}
                  key={`4.${index}`}
                  id={`4.${index}`}
                  value={i}
                  className={`slot bg${i}`}
                  disabled={this.props.disabled ? "disabled" : ""}
                >
                  {i === 9 ? M : i === 8 ? H : ""}
                </button>
              ))}
              {board[5].map((i, index) => (
                <button
                  onMouseOut={this.resetBoard}
                  onClick={this.placementOnClick}
                  onMouseEnter={this.placementMouseover}
                  key={`5.${index}`}
                  id={`5.${index}`}
                  value={i}
                  className={`slot bg${i}`}
                  disabled={this.props.disabled ? "disabled" : ""}
                >
                  {i === 9 ? M : i === 8 ? H : ""}
                </button>
              ))}
              {board[6].map((i, index) => (
                <button
                  onMouseOut={this.resetBoard}
                  onClick={this.placementOnClick}
                  onMouseEnter={this.placementMouseover}
                  key={`6.${index}`}
                  id={`6.${index}`}
                  value={i}
                  className={`slot bg${i}`}
                  disabled={this.props.disabled ? "disabled" : ""}
                >
                  {i === 9 ? M : i === 8 ? H : ""}
                </button>
              ))}
              {board[7].map((i, index) => (
                <button
                  onMouseOut={this.resetBoard}
                  onClick={this.placementOnClick}
                  onMouseEnter={this.placementMouseover}
                  key={`7.${index}`}
                  id={`7.${index}`}
                  value={i}
                  className={`slot bg${i}`}
                  disabled={this.props.disabled ? "disabled" : ""}
                >
                  {i === 9 ? M : i === 8 ? H : ""}
                </button>
              ))}
            </div>
          </div>
        </span>
      </div>
    );
  }
}
