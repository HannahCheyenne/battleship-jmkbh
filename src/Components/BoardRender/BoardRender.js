import React, { Component } from "react";
import './boardrender.css'

export default class Board extends Component {
    //for now the game size is defaulted at 8x8. need to refactor this so it
    //so we can change the size of the grid. shouldn't be too hard. stretch goal!

  render() {
      const { test } = this.props

    return (<>
      <div className="boardContainer">
        <div className="board">
            {test[0].map((i, index) => (<button key={`0.${index}`} id={`0.${index}`} value={i} className="slot" >
                {i === 0 ? "M":
                i === 8 ? "H": "0"}</button>))}
            {test[1].map((i, index) => (<button key={`1.${index}`} id={`1.${index}`} value={i} className="slot" >{i === 0 ? "M":
                i === 8 ? "H": "0"}</button>))}
            {test[2].map((i, index) => (<button key={`2.${index}`} id={`2.${index}`} value={i} className="slot" >{i === 0 ? "M":
                i === 8 ? "H": "0"}</button>))}
            {test[3].map((i, index) => (<button key={`3.${index}`} id={`3.${index}`} value={i} className="slot" >{i === 0 ? "M":
                i === 8 ? "H": "0"}</button>))}
            {test[4].map((i, index) => (<button key={`4.${index}`} id={`4.${index}`} value={i} className="slot" >{i === 0 ? "M":
                i === 8 ? "H": "0"}</button>))}
            {test[5].map((i, index) => (<button key={`5.${index}`} id={`5.${index}`} value={i} className="slot" >{i === 0 ? "M":
                i === 8 ? "H": "0"}</button>))}
            {test[6].map((i, index) => (<button key={`6.${index}`} id={`6.${index}`} value={i} className="slot" >{i === 0 ? "M":
                i === 8 ? "H": "0"}</button>))}
            {test[7].map((i, index) => (<button key={`7.${index}`} id={`7.${index}`} value={i} className="slot" >{i === 0 ? "M":
                i === 8 ? "H": "0"}</button>))}
        </div>
      </div>
      </>
    );
  }
}
