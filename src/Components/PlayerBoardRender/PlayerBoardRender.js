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

export default class PlayerBoardRender extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      board: [
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 0, 0, 7, 7, 1, 7, 7],
        [7, 7, 7, 7, 7, 1, 7, 7],
        [7, 7, 7, 7, 7, 1, 7, 7],
        [3, 7, 7, 7, 7, 7, 7, 7],
        [3, 7, 7, 7, 7, 7, 7, 7],
        [3, 7, 4, 4, 4, 4, 7, 7],
        [3, 7, 7, 7, 7, 7, 7, 7],
      ],
      prevBoard: [
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 0, 0, 7, 7, 1, 7, 7],
        [7, 7, 7, 7, 7, 1, 7, 7],
        [7, 7, 7, 7, 7, 1, 7, 7],
        [3, 7, 7, 7, 7, 7, 7, 7],
        [3, 7, 7, 7, 7, 7, 7, 7],
        [3, 7, 4, 4, 4, 4, 7, 7],
        [3, 7, 7, 7, 7, 7, 7, 7],
      ],
      ships: createShips,
      selectedShip: "",
      curx: 0,
      cury: 0,
      anchorx: 0,
      anchory: 0,
      isAnchor: false,
    };
  }
  // placementListener = function (e) {
  resetBoard = (e) => {
    e.preventDefault();
    console.log("PlayerBoardRender -> resetBoard -> this.state", this.state)
    const oldBoard = this.state.board;
    
    this.setState({
      board: oldBoard,
    });
    
    console.log("PlayerBoardRender -> resetBoard -> this.state", this.state)
  };


  placementMouseover = (e) => {
    e.preventDefault();
    let teddy = this.state
    console.log(teddy, 'teddy was here')
    let newBoard = this.state.board;
    console.log("PlayerBoardRender -> placementMouseover -> newBoard", newBoard)
  
    let split = e.target.id.split(".");
    let newx = Number(split[0]);
    let newy = Number(split[1]);
    let anchory = this.state.anchory;
    let anchorx = this.state.anchorx;

    console.log("x", newx, "y", newy);

    if (newBoard[newx][newy]) {
      this.setState({
        x: newx,
        y: newy,
      });
    }

    if (this.state.isAnchor) {
      const diffx = anchorx - newx;
      const diffy = anchory - newy;

      if (!(diffx !== 0 && diffy !== 0)) {
        if (Math.abs(diffx) > Math.abs(diffy)) {
          console.log("diff x is greater");
          if (diffx > 0) {
            //up
            console.log("diff x is positive - up");
            if (
              //check valid
              newBoard[anchorx][anchory] === 7 &&
              newBoard[anchorx - 1][anchory] === 7 &&
              newBoard[anchorx - 2][anchory] === 7
            ) {
              newBoard[anchorx][anchory] = 6;
              newBoard[anchorx - 1][anchory] = 6;
              newBoard[anchorx - 2][anchory] = 6;
              this.setState({ board: newBoard });
              //validMove = true;
            }
          } else if (diffx < 0) {
            console.log("diff x is negative - down"); //down
            if (
              //checklvalid
              newBoard[anchorx][anchory] === 7 &&
              newBoard[anchorx + 1][anchory] === 7 &&
              newBoard[anchorx + 2][anchory] === 7
            ) {
              newBoard[anchorx][anchory] = 6;
              newBoard[anchorx + 1][anchory] = 6;
              newBoard[anchorx + 2][anchory] = 6;
              this.setState({ board: newBoard });
              //validMove = true;
            }
          }
        } else if (Math.abs(diffy) > Math.abs(diffx)) {
          console.log("diff y is greater");

          if (diffy > 0) {
            //left
            console.log("diff y is positive - left?");
            if (
              //check valid
              newBoard[anchorx][anchory] === 7 &&
              newBoard[anchorx][anchory - 1] === 7 &&
              newBoard[anchorx][anchory - 2] === 7
            ) {
              newBoard[anchorx][anchory] = 6;
              newBoard[anchorx][anchory - 1] = 6;
              newBoard[anchorx][anchory - 2] = 6;
              this.setState({ board: newBoard });
              //validMove = true;
            }
          } else if (diffy < 0) {
            //right
            console.log("diff y is negative - right?");
            if (
              //checklvalid
              newBoard[anchorx][anchory] === 7 &&
              newBoard[anchorx][anchory + 1] === 7 &&
              newBoard[anchorx][anchory + 2] === 7
            ) {
              newBoard[anchorx][anchory] = 6;
              newBoard[anchorx][anchory + 1] = 6;
              newBoard[anchorx][anchory + 2] = 6;
              this.setState({ board: newBoard });
              //validMove = true;
            }
          }
        }
      }
    }
  };

  /*+++++++++++++++++++++++++++++
 
        let id = `${x}.${y}`;
        console.log(id);
        const element = document.getElementById(id);
        console.log(element);
        element.className += " " + "shipLength";

++++++++++++++++++++++++++++++*/

  // selectShip = (e) => {
  //   e.preventDefault()
  //   let newSelection = e.target.id
  //   let ship =
  //   this.setState = ({
  //     selectedShip:newSelection
  //   })
  //   console.log(this.state.selectedShip)
  // }

  placementOnClick = (e) => {
    e.preventDefault();
    let isAnchor = this.state.isAnchor;
    const x = this.state.x;
    const y = this.state.y;

    if (!isAnchor) {
      let id = `${x}.${y}`;
      const element = document.getElementById(id);

      element.className += " selected";
      this.setState({
        anchorx: x,
        anchory: y,
        isAnchor: true,
      });
    } else {
      const anchorx = this.state.anchorx;
      const anchory = this.state.anchory;

      if (x === anchorx && y === anchory) {
        let id = `${x}.${y}`;
        const element = document.getElementById(id);
        element.className = "slot";

        this.setState({
          anchorx: 0,
          anchory: 0,
          isAnchor: false,
        });
      } else {
        //need the length of the ship
        //get the x plus one highlight each box if vert
        //get the y plus one highlight each box if horiz
      }
    }
    // add size to each index
    //this needs to set the ship in place
    // once it is set in place it needs to be removed from the roster.
    // i think that function can be created in the ship container as an onclick
    //like while active and onClick then remove from roster
  };

  render() {
    const { ships, board } = this.state;
    const H = <img className="image" src={boom} alt="hit" />;
    const M = <img className="image" src={miss} alt="miss" />;
    console.log(this.state.selectedShip);
    return (
      <div className="playerContainer">
        
        <div className="shipcontainer">
          {ships.createShips.map((i) => (
            <button className="ship" onClick={this.selectShip} id={`${i.type}`}>
              {i.type}
            </button>
          ))}
        </div>
        <span>
        <div>Health<HealthBar health={this.props.p1_health} /></div>
        <div className="boardContainer">
          <div className="board">
            {board[0].map((i, index) => (
              <button
              onMouseOut={this.resetBoard}
              onClick={this.placementOnClick}
                onMouseEnter={this.placementMouseover}
                key={`0.${index}`}
                id={`0.${index}`}
                value={i}
                className={`slot bg${i}`}
              >
                {i === 9 ? M : i === 8 ? H : ""}
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
              >
                {i === 0 ? M : i === 8 ? H : ""}
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
