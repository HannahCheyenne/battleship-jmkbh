import React, { Component } from "react";
import OpponentBoardRender from "../OpponentBoardRender/OpponentBoardRender";
import ShipContainer from "../ShipContainer/ShipContainer";
import BattleshipAPI from "../../services/battleship-api-service";
import "./gameboard.css";
import PlayerBoardRender from "../PlayerBoardRender/PlayerBoardRender";

class GameBoard extends Component {
  constructor() {
    super();
    this.playerMove = this.playerMove.bind(this);
    this.state = {
      idfromBoard: "",
      //player
      id: 1,
      p1_board: [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
      ],
      //opponent
      p2_board: [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
      ],
      p1_health: [0, 0, 0, 0, 0],
      p2_health: [0, 0, 0, 0, 0],
      player_turn: true,
      //whether game is over
      active_game: true,
    };
  }
  componentDidMount() {
    BattleshipAPI.getState(1).then((data) => {
      const gameState = data.gameState[0];
      this.setState({
        id: gameState.id,
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
  }
  postMove = () => {
    let gameId = this.state.id;
    let split = this.state.idfromBoard.split(".");
    console.log(
      "GameBoard -> postMove -> this.state.idfromBoard",
      this.state.idfromBoard
    );
    let x = Number(split[0]);
    console.log("GameBoard -> postMove -> x", x);
    let y = Number(split[1]);
    console.log("GameBoard -> postMove -> y", y);
    BattleshipAPI.postMove(gameId, x, y).then((data) => {
      const gameState = data.gameState[0];
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
  playerMove(id) {
    this.setState(
      {
        idfromBoard: id,
      },
      () => this.postMove()
    );
  }

  render() {
    console.log("click id in game board", this.state.idfromBoard);
    return (
      <>
        <div className="gamePage">
          <div className="playerShips">
            <ShipContainer data={this.state.p1_health} />
            <div className="shipPlacement">
            </div>
          </div>
          <div className="gameBoard">
            <div className="player" id="player">
              <PlayerBoardRender />
            </div>
            </div>
          <div className="gameBoard">
          <div className="opponent" id="opponent">
              <OpponentBoardRender
                test={this.state.p2_board}
                key={this.state.p2_board}
                playerMove={this.playerMove}
              />
            </div>
            </div>
            
          <div className="opponentShips">
            <ShipContainer data={this.state.p2_health}/>
          </div>
          {!this.state.active_game && <button >New Game</button>}
        </div>
      </>
    );
  }
}
export default GameBoard;
