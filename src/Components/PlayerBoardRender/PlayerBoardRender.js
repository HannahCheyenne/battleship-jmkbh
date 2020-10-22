import React, { Component } from "react";
import "./playerboardrender.css";
import boom from "../../Images/boom.png";
import miss from "../../Images/miss.png";
import battleship from "../../Images/battleship.png";
import carrier from "../../Images/carrier.png";
import patrolboat from "../../Images/patrolboat.png";
import destroyer from "../../Images/destroyer.png";
import submarine from "../../Images/submarine.png";

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
        ]
        };
      }
  placementListener = function (e) {
    
  };
  placementMouseover = function (e) {
    e.preventDefault()
    let split = e.target.id.split(".")
    let x = Number(split[0])
    let y = Number(split[1])
    console.log(x,y, typeof x, typeof y)
    //ship needs to be the size of the ship that is selected in ship container
    //selected ship needs to be set in state, passed in as props
    //need to create a boundary to make sure placement is ok
    //no other ships underneath of it and it is within the boundaries of the game
  };
  placementOnClick = function (e) {
    //this needs to set the ship in place
    // once it is set in place it needs to be removed from the roster.
    // i think that function can be created in the ship container as an onclick
    //like while active and onClick then remove from roster
   
  };
  render() {
    const board = this.state.board;
    console.log(board)
    const H = <img className="image" src={boom} alt="hit" />;
    const M = <img className="image" src={miss} alt="miss" />;
    return (
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

        {/* <GridLayout
        {...this.props}>
            {this.renderGrid().map(coord => coord)}
            <div className="battleship" key='1Ship' data-grid={{x: 1, y: 8, w: 1, h: 5, static: true, isDraggable: true, isDroppable: true, preventCollision:true}}>
                <img className="imageBattleship" src={battleship} alt="battleship"/>
                </div>
            <div className="carrier" key='2Ship' data-grid={{x: 2, y: 8, w: 1, h: 4, static: true, isDraggable: true, isDroppable: true, preventCollision:true}}>
                <img className="imageCarrier" src={carrier} alt="carrier"/>
                </div>
            <div className="submarine" key='3Ship' data-grid={{x: 3, y: 8, w: 1, h: 3, static: true, isDraggable: true, isDroppable: true, preventCollision:true}}>
                <img className="imageSubmarine" src={submarine} alt="submarine"/>
                </div>
            <div className="destroyer" key='4Ship' data-grid={{x: 4, y: 8, w: 1, h: 3, static: true, isDraggable: true, isDroppable: true, preventCollision:true}}>
                <img className="imageDestroyer" src={destroyer} alt="destroyer"/>
                </div>
            <div className="patrolboat" key='5Ship' data-grid={{x: 5, y: 8, w: 1, h: 2, static: true, isDraggable: true, isDroppable: true, preventCollision:true}}>
                <img className="imagePatrolboat" src={patrolboat} alt="patrolboat"/>
                </div>
            </GridLayout>
        </div> */}
      </div>
    );
  }
}
