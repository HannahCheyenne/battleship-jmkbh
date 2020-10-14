import React, { Component } from "react";

export default class Board extends Component {
  render() {

    return (
      <div className="board">
        {this.props.board[0]}
        <br/>
        {this.props.board[1]}
        <br/>
        {this.props.board[2]}
        <br/>
        {this.props.board[3]}
        <br/>
        {this.props.board[4]}
        <br/>
        {this.props.board[5]}
        <br/>
        {this.props.board[6]}
        <br/>
        {this.props.board[7]}
        <br/>
        {this.props.board[8]}
        <br/>
        {this.props.board[9]}
      </div>
    );
  }
}
