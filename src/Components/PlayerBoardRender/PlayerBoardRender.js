import React, { Component } from "react";
import "./playerboardrender.css";
import boom from "../../Images/boom.png";
import miss from "../../Images/miss.png";
import HealthBar from '../GameBoard/HealthBar/HealthBar'
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
          id: '',
          board: [
              [1,1,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,1]
        ],
        ships:createShips,
        selectedShip:""
        };
      }
  // placementListener = function (e) {
    
  // };
  
  placementMouseover = (e) => {
    e.preventDefault()
    let board = this.state.board
    console.log(board, 'board teddy')
    let split = e.target.id.split(".")
    let x = Number(split[0])
    let y = Number(split[1])
    console.log("x", x, "y", y)
  //   if (size.length === value){
      if(board[x][y] === true){
        board[x + 5][y].setAttribute('slot:hover')
        console.log(board[x + 5][y], 'hey, echo hello?')
      }
  // }
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
    // add size to each index
    //this needs to set the ship in place
    // once it is set in place it needs to be removed from the roster.
    // i think that function can be created in the ship container as an onclick
    //like while active and onClick then remove from roster
   
  };
  render() {
    // const board = this.state;
    const {ships, board} = this.state
    const H = <img className="image" src={boom} alt="hit" />;
    const M = <img className="image" src={miss} alt="miss" />;
    console.log(this.state.selectedShip)
    return (
    <div>
    <div className="shipcontainer">
                <HealthBar {...this.props} />
                {ships.createShips.map((i) => (<button className="ship" onClick={this.selectShip} id={`${i.type}`}>{i.type}</button>))}
                <button className="ship" onClick={this.toggleRotation}>Rotate</button>
            </div>
      <div className="boardContainer">
        

        <div className="board">
          {board[0].map((i, index) => (
            <button
            onMouseEnter={this.placementMouseover}
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
