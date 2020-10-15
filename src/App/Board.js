import React, { Component } from "react";

export default class Board extends Component {
  render() {
    return (
      <div className="board">
        <div class="borderDiv">
          {this.props.board[0].map((test) => (
            <button className={`boardButton bg${test}`} id={`0${test}`}>
              {test}
            </button>
          ))}
          {this.props.board[1].map((test) => (
            <button className={`boardButton bg${test}`} id={`1${test}`}>
              {test}
            </button>
          ))}
          {this.props.board[2].map((test) => (
            <button className={`boardButton bg${test}`} id={`2${test}`}>
              {test}
            </button>
          ))}
          {this.props.board[3].map((test) => (
            <button className={`boardButton bg${test}`} id={`3${test}`}>
              {test}
            </button>
          ))}
          {this.props.board[4].map((test) => (
            <button className={`boardButton bg${test}`} id={`4${test}`}>
              {test}
            </button>
          ))}
          {this.props.board[5].map((test) => (
            <button className={`boardButton bg${test}`} id={`5${test}`}>
              {test}
            </button>
          ))}
          {this.props.board[6].map((test) => (
            <button className={`boardButton bg${test}`} id={`6${test}`}>
              {test}
            </button>
          ))}
          {this.props.board[7].map((test) => (
            <button className={`boardButton bg${test}`} id={`7${test}`}>
              {test}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
