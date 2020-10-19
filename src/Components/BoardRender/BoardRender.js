import React, { Component } from "react";
import './boardrender.css'

export default class Board extends Component {
    //for now the game size is defaulted at 8x8. need to refactor this so it
    //so we can change the size of the grid. shouldn't be too hard. stretch goal!
  render() {
      const boardMap = [1,2,3,4,5,6,7,8]
      console.log(this.props.test)
      const {test} = this.props
      console.log(test)
    return (<>
      <div className="boardContainer">
        <div className="board">
          {boardMap.map((i) => (<button className="slot" id={`1.${i}`} key={`1.${i}`}></button>))}
          {boardMap.map((i) => (<button className="slot" id={`2.${i}`} key={`2.${i}`}></button>))}
          {boardMap.map((i) => (<button className="slot" id={`3.${i}`} key={`3.${i}`}></button>))}
          {boardMap.map((i) => (<button className="slot" id={`4.${i}`} key={`4.${i}`}></button>))}
          {boardMap.map((i) => (<button className="slot" id={`5.${i}`} key={`5.${i}`}></button>))}
          {boardMap.map((i) => (<button className="slot" id={`6.${i}`} key={`6.${i}`}></button>))}
          {boardMap.map((i) => (<button className="slot" id={`7.${i}`} key={`7.${i}`}></button>))}
          {boardMap.map((i) => (<button className="slot" id={`8.${i}`} key={`8.${i}`}></button>))}
        </div>
      </div>
      </>
    );
  }
}
