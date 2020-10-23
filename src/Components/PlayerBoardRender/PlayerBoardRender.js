import React, { Component } from "react";
import "./playerboardrender.css";
import boom from "../../Images/boom.png";
import miss from "../../Images/miss.png";
import HealthBar from "../GameBoard/HealthBar/HealthBar";
import battleship from "../../Images/battleship.png";
import carrier from "../../Images/carrier.png";
import patrolboat from "../../Images/patrolboat.png";
import destroyer from "../../Images/destroyer.png";
import submarine from "../../Images/submarine.png";
import createShips from "../../Utils/GameHelpers";

export default class PlayerBoardRender extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      board: [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
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

  // };

  placementMouseover = (e) => {
    e.preventDefault();
    let board = this.state.board;
    console.log(board, "board teddy");
    let split = e.target.id.split(".");
    let newx = Number(split[0]);
    let newy = Number(split[1]);
    console.log("x", newx, "y", newy);
    if (board[newx][newy]) {
      this.setState({
        x: newx,
        y: newy,
      });
    }

    if(this.state.isAnchor){
      
      //ship lenght = 3
      //determine direction
        //diffx = anchorx - curx
        //diffy = anchroy - cury

      //(diffx && diffy = 0)
        //skipp all that 

      //if(abs(diffx) > abs(diffy))
        //if(diffx > 0) //left
        //else if (diffx < 0) to the //right
      //else if (abs(diffy) > abs(diffx))
        //if(diffy > 0) //up
        //else if (diffy < 0) //down
      //else (no extreme)

/*+++++++++++++++++++++++++++++
setMd2(player) {
    let board = this.state.board;
    let validMove = false;
    let x = 0;
    let y = 0;
    let horizontal = true;

    while (!validMove) {
      y = Math.floor(Math.random() * 6) + 2;
      console.log("3 sandbox -> y", y);
      x = Math.floor(Math.random() * 6) + 2;
      console.log("3 sandbox -> x", x);
      horizontal = Math.random() < 0.5;

      if (!horizontal) {
        if (
          board[y][x] === 1 &&
          board[y - 1][x] === 1 &&
          board[y - 2][x] === 1
        ) {
          board[y][x] = 7;
          board[y - 1][x] = 7;
          board[y - 2][x] = 7;
          this.setState({ board: board });
          validMove = true;
        }
      } else {
        if (
          board[y][x] === 1 &&
          board[y][x - 1] === 1 &&
          board[y][x - 2] === 1
        ) {
          board[y][x] = 7;
          board[y][x - 1] = 7;
          board[y][x - 2] = 7;
          this.setState({ board: board });
          validMove = true;
        }
      }
    }
  }

++++++++++++++++++++++++++++++*/






      let id = `${x}.${y}`;
      console.log(id);
      const element = document.getElementById(id);
      console.log(element);
      element.className += " " + "shipLength";


      
    }
    //ship needs to be the size of the ship that is selected in ship container
    //selected ship needs to be set in state, passed in as props
    //need to create a boundary to make sure placement is ok
    //no other ships underneath of it and it is within the boundaries of the game
  };
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
    console.log("im clicking", this.state.y, this.state.x);
    const x = this.state.x;
    const y = this.state.y;
    console.log("isAnchor", isAnchor);

    if (!isAnchor) {
      //find the div with the x.y, set className to selecte
      let id = `${x}.${y}`;
      console.log(id);
      const element = document.getElementById(id);
      console.log(element);
      element.className += " " + " selected";
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
      }
      else {
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
      <div>
        <div className="shipcontainer">
          <HealthBar {...this.props} />
          {ships.createShips.map((i) => (
            <button className="ship" onClick={this.selectShip} id={`${i.type}`}>
              {i.type}
            </button>
          ))}
        </div>
        <div className="boardContainer">
          <div className="board">
            {board[0].map((i, index) => (
              <button
                onMouseEnter={this.placementMouseover}
                onClick={this.placementOnClick}
                key={`0.${index}`}
                id={`0.${index}`}
                value={i}
                className="slot"
              >
                {i === 0 ? M : i === 8 ? H : ""}
              </button>
            ))}
            {board[1].map((i, index) => (
              <button
                onMouseEnter={this.placementMouseover}
                onClick={this.placementOnClick}
                key={`1.${index}`}
                id={`1.${index}`}
                value={i}
                className="slot"
              >
                {i === 0 ? M : i === 8 ? H : ""}
              </button>
            ))}
            {board[2].map((i, index) => (
              <button
                onMouseEnter={this.placementMouseover}
                onClick={this.placementOnClick}
                key={`2.${index}`}
                id={`2.${index}`}
                value={i}
                className="slot"
              >
                {i === 0 ? M : i === 8 ? H : ""}
              </button>
            ))}
            {board[3].map((i, index) => (
              <button
                onMouseEnter={this.placementMouseover}
                onClick={this.placementOnClick}
                key={`3.${index}`}
                id={`3.${index}`}
                value={i}
                className="slot"
              >
                {i === 0 ? M : i === 8 ? H : ""}
              </button>
            ))}
            {board[4].map((i, index) => (
              <button
                onMouseEnter={this.placementMouseover}
                onClick={this.placementOnClick}
                key={`4.${index}`}
                id={`4.${index}`}
                value={i}
                className="slot"
              >
                {i === 0 ? M : i === 8 ? H : ""}
              </button>
            ))}
            {board[5].map((i, index) => (
              <button
                onMouseEnter={this.placementMouseover}
                onClick={this.placementOnClick}
                key={`5.${index}`}
                id={`5.${index}`}
                value={i}
                className="slot"
              >
                {i === 0 ? M : i === 8 ? H : ""}
              </button>
            ))}
            {board[6].map((i, index) => (
              <button
                onMouseEnter={this.placementMouseover}
                onClick={this.placementOnClick}
                key={`6.${index}`}
                id={`6.${index}`}
                value={i}
                className="slot"
              >
                {i === 0 ? M : i === 8 ? H : ""}
              </button>
            ))}
            {board[7].map((i, index) => (
              <button
                onMouseEnter={this.placementMouseover}
                onClick={this.placementOnClick}
                key={`7.${index}`}
                id={`7.${index}`}
                value={i}
                className="slot"
              >
                {i === 0 ? M : i === 8 ? H : ""}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
