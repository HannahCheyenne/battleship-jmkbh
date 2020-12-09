import React, { Component } from "react";
import BoardRender from "../BoardRender/BoardRender";
import BattleshipAPI from "../../services/battleship-api-service";
import "./gameboard.css";
import PlayerBoardRender from "../PlayerBoardRender/PlayerBoardRender";
import SetPlayerBoardRender from "../SetPlayerBoardRender/SetPlayerBoardRender";
import Context from "../../Context";
//import Audio from "../../services/audio";
import GetAiMove from "./GetAiMove";
import EndGameTrigger from "./EndGame/EndGameTrigger";
import EndGameOverlay from "./EndGameOverlay/EndGameOverlay";
import HealthBar from "./HealthBar/HealthBar";
import ai, { getMask } from "../../Utils/AI-helpers";
import { NeuralNetwork, cloneValues } from "../../Utils/NN";
const math = require("mathjs");

class GameBoard extends Component {
  constructor() {
    super();
    this.playerMove = this.playerMove.bind(this);
    this.state = {
      newBWins: 0,
      randoWins: 0,
      idfromBoard: "",
      //player
      id: 1,
      p1_board: [
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
      ],
      //opponent
      p2_board: [
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
      ],
      heatMap: [
        [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
      ],
      p1_health: [2, 3, 3, 4, 5],
      p2_health: [2, 3, 3, 4, 5],
      player_turn: true,
      //whether game is over
      active_game: false,
      endScreen: false,
      //disabled: false,
    };
    this.runs = 1000;
    this.turns = 0;
    this.nn = new NeuralNetwork(
      math.matrix(this.state.p1_board),
      math.matrix(this.state.p2_board)
    );
  }
  static contextType = Context;

  newGame = (playerBoard) => {
    //this.context.handleTheme("game.mp3");
    let initialState = {
      p1_board: playerBoard,
      p2_board: playerBoard,
      p1_health: [2, 3, 3, 4, 5],
      p2_health: [2, 3, 3, 4, 5],
      player_turn: true,
      active_game: true,
    };

    BattleshipAPI.newGame(initialState).then((data) => {
      const gameState = data.gameState;
      this.setState({
        idfromBoard: "",
        id: gameState.id,
        //player
        p1_board: gameState.p1_board,
        //opponent
        p2_board: gameState.p2_board,
        p1_health: gameState.p1_health,
        p2_health: gameState.p2_health,
        player_turn: gameState.player_turn,
        //whether game is over
        active_game: gameState.active_game,
      });
    });
  };

  // hitSound = (bef, aft) => {
  //   let hit = false;
  //   for (let i = 0; i < bef.length; i++) {
  //     if (bef[i] !== 0 && aft[i] === 0) {
  //       //!Audio.laser();
  //       //!Audio.attackSound(true, true);
  //       hit = true;
  //     }
  //     if (bef[i] > aft[i] && aft[i] !== 0) {
  //       //!Audio.laser();
  //       //!Audio.attackSound(true);
  //       hit = true;
  //     }
  //   }
  //   hit === false && Audio.attackSound(false);
  //   return aft;
  // };

  // winTheme = (p2) => {
  //   p2.reduce((a, b) => a + b) === 0 && this.context.handleTheme("win.mp3");
  // };

  // loseTheme = (p1) => {
  //   p1.reduce((a, b) => a + b) === 0 && this.context.handleTheme("lose.mp3");
  // };

  animateHeatMap = (nn, mask) => {
    let heatMap = math.clone(nn.output);

    for (let i = 0; i < nn.output._data.length; i++) {
      for (let j = 0; j < nn.output._data[0].length; j++) {
        if (mask[i][j] === 1) {
          heatMap._data[i][j] = "";
        }
      }
    }
    if (!this.state.active_game) {
      for (let i = 0; i < nn.output._data.length; i++) {
        for (let j = 0; j < nn.output._data[0].length; j++) {
          heatMap._data[i][j] = "";
        }
      }
    }
    this.setState({
      heatMap: heatMap._data,
    });
  };

  getAiMove = () => {
    const gameId = this.state.id;
    let board = math.matrix(this.state.p1_board);
    let mask = ai.getMask(board);
    const maxAge = 0;
    let input = ai.scrubVisibleBoard(board, mask);
    let output = ai.scrubAnswerBoard(board, mask);
    let dummy = new NeuralNetwork(input, output);

    // if (this.nn.age < maxAge || true) {
    //   for (let i = 0; i < maxAge; i++) {
    //     //train dummy on random board one time:
    //     let fakeBoard = math.matrix(ai.generateBoard());
    //     let fakeMask = ai.getMask(fakeBoard);
    //     let fakeInput = ai.scrubVisibleBoard(fakeBoard, fakeMask, true);
    //     let fakeOutput = ai.scrubAnswerBoard(fakeBoard, fakeMask, true);
    //     dummy.input = fakeInput;
    //     dummy.y = fakeOutput;
    //     dummy.train();
    //     dummy.input = input;
    //     dummy.feedforward();
    //     this.nn.y = dummy.output;
    //     this.nn.train();
    //   }
    // }

    this.nn.input = input;
    this.nn.y = output;
    this.nn.feedforward();

    const { x, y } = ai.getMove(this.nn, mask);

    this.nn.age += 1;
    this.nn.backprop();

    this.animateHeatMap(this.nn, mask);

    BattleshipAPI.getAiMove(gameId, x, y).then((data) => {
      const gameState = data.gameState;
      this.setState(
        {
          idfromBoard: "",
          id: gameState.id,
          //player
          p1_board: gameState.p1_board,
          //opponent
          p2_board: gameState.p2_board,
          p1_health: gameState.p1_health,
          p2_health: gameState.p2_health,
          player_turn: gameState.player_turn,
          //whether game is over
          active_game: gameState.active_game,
        },
        this.postMove()
      );
    });
    //.then(() => this.loseTheme(this.state.p1_health));
  };

  postMove = () => {
    let gameId = this.state.id;
    let split = this.state.idfromBoard.split(".");
    let x = Number(split[0]);
    let y = Number(split[1]);
    let p2Health = this.state.p2_health;

    this.turns += 1;

    if (this.state.active_game) {
      //!--- temporary testing edit
      let validMove = false;

      while (!validMove) {
        x = math.floor(Math.random() * 8);
        y = math.floor(Math.random() * 8);

        if (this.state.p2_board[x][y] < 8) {
          validMove = true;
        }
      }
    }
    //!--- end temporary testing edit

    if (this.state.p2_board[x][y] <= 7) {
      BattleshipAPI.postMove(gameId, x, y).then((data) => {
        const gameState = data.gameState;
        this.setState(
          {
            id: gameState.id,
            //player
            p1_board: gameState.p1_board,
            //opponent
            p2_board: gameState.p2_board,
            p1_health: gameState.p1_health,
            p2_health: gameState.p2_health,
            player_turn: gameState.player_turn,
            //whether game is over
            active_game: gameState.active_game,
          }
          //() => (p2Health = this.hitSound(p2Health, gameState.p2_health))
        );
      });
      //.then(() => this.winTheme(p2Health));
    }
  };

  playerMove(id) {
    this.setState(
      {
        idfromBoard: id,
      },
      () => this.postMove()
    );
  }

  gameOver = () => {
    let newBWins = this.state.newBWins;
    let randoWins = this.state.randoWins;

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let p1 = this.state.p1_health.reduce(reducer);
    let p2 = this.state.p2_health.reduce(reducer);

    if (p1 === 0) {
      console.log("NewB wins in", this.turns);
      newBWins += 1;
    } else if (p2 === 0) {
      console.log("Rando wins in", this.turns);
      randoWins += 1;
    }
    this.turns = 0;
    this.setState(
      {
        randoWins: randoWins,
        newBWins: newBWins,
        active_game: false,
        //endScreen: true,  //!temp edit for testing!
      },
      this.animateHeatMap(this.nn, ai.getMask(math.matrix(this.state.p1_board)))
    );

    const interval = setInterval(() => {
      if (this.runs > 0) {
        this.runs -= 1;
        console.log("runs left", this.runs);
        console.log("neural network age:", this.nn.age);
        this.postMove();
        clearInterval(interval);
      }
    }, 3200);
  };

  gameOn = () => {
    this.setState(
      {
        endScreen: false,
      }
      //() => this.context.handleTheme("menu.mp3")
    );
  };

  render() {
    return (
      <>
        <div className="gamePage">
          <div className="gameBoard">
            {this.state.active_game && (
              <div>
                <p className="wins">
                  NewB Wins: {this.state.newBWins} (
                  {(
                    100 *
                    (this.state.newBWins /
                      (this.state.newBWins + this.state.randoWins))
                  ).toFixed(2)}
                  %)
                </p>
                <HealthBar health={this.state.p1_health} />
              </div>
            )}
            {!this.state.active_game && <EndGameTrigger func={this.gameOver} />}
            {this.state.endScreen && (
              <EndGameOverlay func={this.gameOn} state={this.state} />
            )}
            {!this.state.player_turn && (
              <GetAiMove func={this.getAiMove}></GetAiMove>
            )}

            <div className="player" id="player">
              {!this.state.active_game && !this.state.endScreen && (
                <PlayerBoardRender
                  newGame={this.newGame}
                  disabled={this.state.active_game}
                  test={this.state.p1_board}
                  key={this.state.p1_board}
                />
              )}
              {this.state.active_game && (
                <SetPlayerBoardRender
                  heatMap={this.state.heatMap}
                  test={this.state.p1_board}
                  key={this.state.p1_board}
                  disabled={true}
                />
              )}
            </div>
          </div>
          <div className="gameBoard">
            {this.state.active_game && (
              <div>
                <p className="wins">
                  Rando Wins: {this.state.randoWins}(
                  {(
                    100 *
                    (this.state.randoWins /
                      (this.state.newBWins + this.state.randoWins))
                  ).toFixed(2)}
                  %)
                </p>
                <HealthBar health={this.state.p2_health} />
              </div>
            )}
            <div className="opponent" id="opponent">
              {this.state.active_game && (
                <BoardRender
                  test={this.state.p2_board}
                  key={this.state.p2_board}
                  playerMove={this.playerMove}
                  disabled={!this.state.active_game}
                />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default GameBoard;
