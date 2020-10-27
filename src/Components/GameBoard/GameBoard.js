import React, { Component } from "react";
import OpponentBoardRender from "../OpponentBoardRender/OpponentBoardRender";
// import ShipContainer from "../ShipContainer/ShipContainer";
import BattleshipAPI from "../../services/battleship-api-service";
import "./gameboard.css";
import PlayerBoardRender from "../PlayerBoardRender/PlayerBoardRender";
// import HealthBar from "./HealthBar/HealthBar";
import ChatWindow from "../Chat/ChatWindow/ChatWindow"
import Join from "../Chat/Join/Join"
import Chat from "../Chat/Chat/Chat"
import Context from "../../Context"


class GameBoard extends Component {
  static contextType = Context;
  
  constructor() {
    super();
    this.playerMove = this.playerMove.bind(this);
    this.state = {
      show: false,
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
  
  showChat = () => {
    this.setState({ show: true });
  };
  
  hideChat = () => {
    this.setState({ show: false });
  };
  
  componentDidMount() {
    BattleshipAPI.getState(1).then((data) => {
      const gameState = data.gameState;
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
  newGame = () => {
    let initialState = {
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
      p2_board: [
        [7, 4, 4, 4, 4, 4, 7, 7],
        [7, 7, 7, 7, 7, 7, 2, 7],
        [7, 7, 7, 7, 7, 7, 2, 7],
        [7, 7, 0, 0, 7, 7, 2, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7, 7, 7],
        [7, 7, 7, 1, 1, 1, 7, 7],
        [7, 3, 3, 3, 3, 7, 7, 7],
      ],
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

  postMove = () => {
    let gameId = this.state.id;
    let split = this.state.idfromBoard.split(".");
    let x = Number(split[0]);
    let y = Number(split[1]);
    BattleshipAPI.postMove(gameId, x, y).then((data) => {
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
  playerMove(id) {
    this.setState(
      {
        idfromBoard: id,
      },
      () => this.postMove()
    );
  }

  render() {
    //These need to be changed to the actual user and the gameboard ID so both
    //users can talk to each other
    const name = "TestUser";
    const room = "TestRoom";
    return (
      <>
        <div className="gamePage">
          <div className="gameBoard">
            <div className="player" id="player">
              <PlayerBoardRender
                test={this.state.p2_board}
                key={this.state.p2_board}
                ships={this.state.p1_health}
                p1_health={this.state.p1_health}
              />
            </div>
          </div>
          <div className="gameBoard">
            <div className="opponent" id="opponent">
              <OpponentBoardRender
                test={this.state.p2_board}
                key={this.state.p2_board}
                playerMove={this.playerMove}
                p2_health={this.state.p2_health}

              />
            </div>
          </div>

          {/* <div className="opponentShips">
            <ShipContainer data={this.state.p2_health} />
          </div>
          {!this.state.active_game && (
            <NewGame data={this.state} handleClick={this.newGame} />
          */}
          <ChatWindow show={this.state.show} handleClose={this.hideChat}>
            {/* <Join name={"Test User"} room={"test room"}></Join> */}
            <Chat userName={name} chatRoom={room}/>
            {/* Add Join Chat here */}
          </ChatWindow>
          <button type="button" onClick={this.showChat}>Chat</button>
        </div>
      </>
    );
  }
}
export default GameBoard;
