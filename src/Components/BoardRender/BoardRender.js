import React, { Component } from "react";
import './boardrender.css'

export default class Board extends Component {
  render() {
      const boardMap = [1,2,3,4,5,6,7,8]
    return (<>
      <div className="boardContainer">
        <div class="board">
          {boardMap.map((i) => (<button className="slot" id={`1.${i}`}></button>))}
          {boardMap.map((i) => (<button className="slot" id={`2.${i}`}></button>))}
          {boardMap.map((i) => (<button className="slot" id={`3.${i}`}></button>))}
          {boardMap.map((i) => (<button className="slot" id={`4.${i}`}></button>))}
          {boardMap.map((i) => (<button className="slot" id={`5.${i}`}></button>))}
          {boardMap.map((i) => (<button className="slot" id={`6.${i}`}></button>))}
          {boardMap.map((i) => (<button className="slot" id={`7.${i}`}></button>))}
          {boardMap.map((i) => (<button className="slot" id={`8.${i}`}></button>))}
        </div>
      </div>
      </>
    );
  }
}
