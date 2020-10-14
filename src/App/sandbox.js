import React, { Component } from "react";
import Board from "./Board";
import "./sandbox.css";

export default class sandbox extends Component {
  state = {
    board: [
      [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 3, 3],
        [1, 1, 2, 2, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 3, 3, 3, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 4, 4, 4, 4, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
      ],
      [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 3, 3],
        [1, 1, 2, 2, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 3, 3, 3, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 4, 4, 4, 4, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
      ],
    ],
    player: 1,
    ships: [
      {
        s: {
          horizontal: false,
          health: 2,
        },
        m1: {
          horizontal: false,
          health: 3,
        },
        m2: {
          horizontal: false,
          health: 3,
        },
        lg: {
          horizontal: false,
          health: 4,
        },
        bs: {
          horizontal: false,
          health: 5,
        },
      },
      {
        s: {
          horizontal: false,
          health: 2,
        },
        m1: {
          horizontal: false,
          health: 3,
        },
        m2: {
          horizontal: false,
          health: 3,
        },
        lg: {
          horizontal: false,
          health: 4,
        },
        bs: {
          horizontal: false,
          health: 5,
        },
      },
    ],
  };

  checkHit(x, y) {
    if (this.state.player === 0) {
      if (this.state.board[0][y][x] > 1) return 8;
      //hit
      else return 0; //miss
    } else {
      if (this.state.board[1][y][x] > 1) return 8;
      //hit
      else return 0; //miss
    }
  }

  changePlayer() {
    if (this.state.player === 1) {
      this.setState({ player: 0 });
    } else {
      this.setState({ player: 1 });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let p1Board = this.state.board[this.state.player];

    p1Board[y][x] = this.checkHit(x, y);

    this.setState({
      player1Board: p1Board,
    });

    this.changePlayer();
  };

  componentDidMount() {}

  render() {

    return (
      <div className="sandbox">
        {" "}
        Player 0 board:
        <Board board={this.state.board[0]} key={this.state.board[0]}></Board>
        Player 1 board:
        <Board board={this.state.board[1]} key={this.state.board[1]}></Board>
        <form>
          <label>
            Attacking Player: {this.state.player}
            <br />
            x:
            <input type="text" name="x" id="x" />
            y:
            <input type="text" name="y" id="y" />
          </label>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
