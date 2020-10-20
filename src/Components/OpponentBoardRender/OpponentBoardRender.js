import React, { Component } from "react";
import boom from "../../Images/boom.png";
import miss from "../../Images/miss.png";

import "./opponentboardrender.css";

export default class OpponentBoard extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      id: "",
    };
  }
  handleClick(event) {
    this.setState(
      {
        id: event.target.id,
      },
      () => this.props.playerMove(this.state.id)
    );
  }
  render() {
    const { p2Board } = this.props;
    const H = <img className="image" src={boom} alt="hit" />;
    const M = <img className="image" src={miss} alt="miss" />
    return (
      <>
        <div className="boardContainer">
          <div className="board">
            {p2Board[0].map((i, index) => (<button onClick={this.handleClick} key={`0.${index}`} id={`0.${index}`} value={i} className="slot" >{i === 0 ? M:
                i === 8 ? H: ""}</button>))}
            {p2Board[1].map((i, index) => (<button onClick={this.handleClick} key={`1.${index}`} id={`1.${index}`} value={i} className="slot" >{i === 0 ? M:
                i === 8 ? H: ""}</button>))}
            {p2Board[2].map((i, index) => (<button onClick={this.handleClick} key={`2.${index}`} id={`2.${index}`} value={i} className="slot" >{i === 0 ? M:
                i === 8 ? H: ""}</button>))}
            {p2Board[3].map((i, index) => (<button onClick={this.handleClick} key={`3.${index}`} id={`3.${index}`} value={i} className="slot" >{i === 0 ? M:
                i === 8 ? H: ""}</button>))}
            {p2Board[4].map((i, index) => (<button onClick={this.handleClick} key={`4.${index}`} id={`4.${index}`} value={i} className="slot" >{i === 0 ? M:
                i === 8 ? H: ""}</button>))}
            {p2Board[5].map((i, index) => (<button onClick={this.handleClick} key={`5.${index}`} id={`5.${index}`} value={i} className="slot" >{i === 0 ? M:
                i === 8 ? H: ""}</button>))}
            {p2Board[6].map((i, index) => (<button onClick={this.handleClick} key={`6.${index}`} id={`6.${index}`} value={i} className="slot" >{i === 0 ? M:
                i === 8 ? H: ""}</button>))}
            {p2Board[7].map((i, index) => (<button onClick={this.handleClick} key={`7.${index}`} id={`7.${index}`} value={i} className="slot" >{i === 0 ? M:
                i === 8 ? H: ""}</button>))}
          </div>
        </div>
      </>
    );
  }
}
