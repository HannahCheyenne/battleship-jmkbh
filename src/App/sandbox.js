import React, { Component } from "react";
import Board from "./Board";
import "./sandbox.css";

export default class sandbox extends Component {
  state = {
    board: [
      [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
      ],
      [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
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
          health: 3,
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

  generateBoard(player) {
    this.setBs(0);
    this.setBs(1);
    this.setLg(0);
    this.setLg(1);
    this.setMd2(0);
    this.setMd2(1);
    this.setMd1(0);
    this.setMd1(1);
    this.setSm(0);
    this.setSm(1);
  }

  setSm(player) {
    let board = this.state.board;
    let validMove = false;
    let x = 0;
    let y = 0;
    let horizontal = false;

    while (!validMove) {
      y = Math.floor(Math.random() * 7) + 1;
      console.log("2 sandbox -> setSm -> y", y);
      x = Math.floor(Math.random() * 7) + 1;
      console.log("2 sandbox -> setSm -> x", x);
      horizontal = Math.random() < 0.5;

      if (!horizontal) {
        if (board[player][y][x] === 1 && board[player][y - 1][x] === 1) {
          board[player][y][x] = 2;
          board[player][y - 1][x] = 2;
          this.setState({ board: board });
          validMove = true;
        }
      } else {
        if (board[player][y][x] === 1 && board[player][y][x - 1] === 1) {
          board[player][y][x] = 2;
          board[player][y][x - 1] = 2;
          this.setState({ board: board });
          validMove = true;
        }
      }
    }
  }

  setMd1(player) {
    let board = this.state.board;
    let validMove = false;
    let x = 0;
    let y = 0;
    let horizontal = true;

    while (!validMove) {
      y = Math.floor(Math.random() * 6) + 2;
      console.log("3 sandbox -> y", y);
      x = Math.floor(Math.random() * 6) + 2;
      console.log("3 sandbox -> x", x);
      horizontal = Math.random() < 0.5;

      if (!horizontal) {
        if (
          board[player][y][x] === 1 &&
          board[player][y - 1][x] === 1 &&
          board[player][y - 2][x] === 1
        ) {
          board[player][y][x] = 3;
          board[player][y - 1][x] = 3;
          board[player][y - 2][x] = 3;
          this.setState({ board: board });
          validMove = true;
        }
      } else {
        if (
          board[player][y][x] === 1 &&
          board[player][y][x - 1] === 1 &&
          board[player][y][x - 2] === 1
        ) {
          board[player][y][x] = 3;
          board[player][y][x - 1] = 3;
          board[player][y][x - 2] = 3;
          this.setState({ board: board });
          validMove = true;
        }
      }
    }
  }

  setMd2(player) {
    let board = this.state.board;
    let validMove = false;
    let x = 0;
    let y = 0;
    let horizontal = true;

    while (!validMove) {
      y = Math.floor(Math.random() * 6) + 2;
      console.log("3 sandbox -> y", y);
      x = Math.floor(Math.random() * 6) + 2;
      console.log("3 sandbox -> x", x);
      horizontal = Math.random() < 0.5;

      if (!horizontal) {
        if (
          board[player][y][x] === 1 &&
          board[player][y - 1][x] === 1 &&
          board[player][y - 2][x] === 1
        ) {
          board[player][y][x] = 3;
          board[player][y - 1][x] = 3;
          board[player][y - 2][x] = 3;
          this.setState({ board: board });
          validMove = true;
        }
      } else {
        if (
          board[player][y][x] === 1 &&
          board[player][y][x - 1] === 1 &&
          board[player][y][x - 2] === 1
        ) {
          board[player][y][x] = 3;
          board[player][y][x - 1] = 3;
          board[player][y][x - 2] = 3;
          this.setState({ board: board });
          validMove = true;
        }
      }
    }
  }

  setLg(player) {
    let board = this.state.board;
    let validMove = false;
    let x = 0;
    let y = 0;
    let horizontal = true;

    while (!validMove) {
      y = Math.floor(Math.random() * 5) + 3;
      console.log("3 sandbox -> y", y);
      x = Math.floor(Math.random() * 5) + 3;
      console.log("3 sandbox -> x", x);
      horizontal = Math.random() < 0.5;

      if (!horizontal) {
        if (
          board[player][y][x] === 1 &&
          board[player][y - 1][x] === 1 &&
          board[player][y - 2][x] === 1 &&
          board[player][y - 3][x] === 1
        ) {
          board[player][y][x] = 4;
          board[player][y - 1][x] = 4;
          board[player][y - 2][x] = 4;
          board[player][y - 3][x] = 4;
          this.setState({ board: board });
          validMove = true;
        }
      } else {
        if (
          board[player][y][x] === 1 &&
          board[player][y][x - 1] === 1 &&
          board[player][y][x - 2] === 1 &&
          board[player][y][x - 3] === 1
        ) {
          board[player][y][x] = 4;
          board[player][y][x - 1] = 4;
          board[player][y][x - 2] = 4;
          board[player][y][x - 3] = 4;
          this.setState({ board: board });
          validMove = true;
        }
      }
    }
  }

  setBs(player) {
    let board = this.state.board;
    let validMove = false;
    let x = 0;
    let y = 0;
    let horizontal = true;

    while (!validMove) {
      y = Math.floor(Math.random() * 4) + 4;
      console.log("3 sandbox -> y", y);
      x = Math.floor(Math.random() * 4) + 4;
      console.log("3 sandbox -> x", x);
      horizontal = Math.random() < 0.5;

      if (!horizontal) {
        if (
          board[player][y][x] === 1 &&
          board[player][y - 1][x] === 1 &&
          board[player][y - 2][x] === 1 &&
          board[player][y - 3][x] === 1 &&
          board[player][y - 4][x] === 1
        ) {
          board[player][y][x] = 5;
          board[player][y - 1][x] = 5;
          board[player][y - 2][x] = 5;
          board[player][y - 3][x] = 5;
          board[player][y - 4][x] = 5;
          this.setState({ board: board });
          validMove = true;
        }
      } else {
        if (
          board[player][y][x] === 1 &&
          board[player][y][x - 1] === 1 &&
          board[player][y][x - 2] === 1 &&
          board[player][y][x - 3] === 1 &&
          board[player][y][x - 4] === 1
        ) {
          board[player][y][x] = 5;
          board[player][y][x - 1] = 5;
          board[player][y][x - 2] = 5;
          board[player][y][x - 3] = 5;
          board[player][y][x - 4] = 5;
          this.setState({ board: board });
          validMove = true;
        }
      }
    }
  }

  componentDidMount() {
    this.generateBoard();
  }

  render() {
    return (
      <div className="sandbox">
        {" "}
        Player 0 board:
        <Board board={this.state.board[0]} key={this.state.board}></Board>
        Player 1 board:
        <Board board={this.state.board[1]} key={this.state.board + 1}></Board>
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
