import React, { Component } from "react";

export default class Board extends Component {
  render() {
    return (
      <div className="board">
        <div class="borderDiv">
        {this.props.board[0].map((test) => <button className={`boardButton bg${test}`}>{test}</button>)}
        {this.props.board[1].map((test) => <button className={`boardButton bg${test}`}>{test}</button>)}
        {this.props.board[2].map((test) => <button className={`boardButton bg${test}`}>{test}</button>)}
        {this.props.board[3].map((test) => <button className={`boardButton bg${test}`}>{test}</button>)}
        {this.props.board[4].map((test) => <button className={`boardButton bg${test}`}>{test}</button>)}
        {this.props.board[5].map((test) => <button className={`boardButton bg${test}`}>{test}</button>)}
        {this.props.board[6].map((test) => <button className={`boardButton bg${test}`}>{test}</button>)}
        {this.props.board[7].map((test) => <button className={`boardButton bg${test}`}>{test}</button>)}
        </div>
      </div>
    );
  }
}
