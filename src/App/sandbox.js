import React, { Component } from "react";
import Board from "./Board";

export default class sandbox extends Component {
  state = {
    player1Board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 3, 3, 3, 0],
      [0, 0, 2, 2, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 3, 3, 3, 0, 0, 5, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 5, 0],
      [0, 0, 0, 4, 4, 4, 4, 0, 5, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 5, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 5, 4],
      [0, 0, 0, 0, 0, 0, 0, 0, 5, 4],
    ],
    player2Board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 4, 4, 4, 4, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
      [0, 5, 5, 5, 5, 5, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 3, 3, 3, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 3, 3, 3, 0, 0, 5],
    ],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let p1Board = this.state.player1Board;

    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        p1Board[x][y] = 2;
      }
    }

    this.setState({
      player1Board: p1Board,
    });
  };

  componentDidMount() {}

  render() {

    const p1Board = this.state.player1Board;
    console.log("sandbox -> render -> p1Board ", p1Board )

    return (
      <div>
        Player 1 board:
        <Board board={this.state.player1Board}  key={this.state.player1Board}></Board>
        Player 1 board:
        <Board board={this.state.player2Board}  key={this.state.player2Board}></Board>
        <form>
          <label>
            input x, y:
            <br />
            <input type="text" name="x" />
            <input type="text" name="y" />
          </label>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
