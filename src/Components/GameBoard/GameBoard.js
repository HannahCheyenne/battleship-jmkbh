import React, { Component } from "react";
import OpponentBoardRender from "../OpponentBoardRender/OpponentBoardRender";
import Header from "../Header/Header";
import ShipContainer from "../ShipContainer/ShipContainer";
import BattleshipAPI from "../../services/battleship-api-service";
import "./gameboard.css";

class GameBoard extends Component {
  constructor() {
    super();
    this.playerMove = this.playerMove.bind(this);
    this.state = {
        idfromBoard: "",
        //player
        p1_board:[],
        //opponent
        p2_board:[],
        p1_health:[],
        p2_health:[],
        player_turn:true,
        //whether game is over
        active_game:true,
    };
  }
    componentDidMount(){
        BattleshipAPI.getState()
        .then(data => {
            console.log(data)
            this.setState({
                p1_board:data.p1_board,
                //opponent
                p2_board:data.p2_board,
                p1_health:data.p1_health,
                p2_health:data.p2_health,
                player_turn:data.player_turn,
                //whether game is over
                active_game:data.active_game,
            })
          })
    }
  postMove=()=>{
    let gameId = this.props.match.params.id
    console.log(this.props)
      let split = this.state.idfromBoard.split(".")
      let x = Number(split[0])
      let y = Number(split[1])
      BattleshipAPI.postMove(gameId,x,y)
      .then((data) => {
          this.setState({
            idfromBoard:'',
            //player
            p1_board:data.p1_board,
            //opponent
            p2_board:data.p2_board,
            p1_health:data.p1_health,
            p2_health:data.p2_health,
            player_turn:data.player_turn,
            //whether game is over
            active_game:data.active_game,
          })
      })
  }
  playerMove(id) {
    this.setState({
      idfromBoard: id,
    }, ()=>this.postMove());
}


  render() {
    const test = [
      [0, 0, 1, 5, 5, 5, 5, 5],
      [0, 0, 0, 1, 1, 1, 1, 1],
      [8, 8, 8, 8, 1, 1, 1, 1],
      [8, 1, 4, 4, 4, 4, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 3, 3, 3, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 3, 3, 3, 1, 1, 2, 8],
    ];
    console.log(test);
    console.log("click id in game board", this.state.idfromBoard);
    return (
      <>
        <Header />
        <div className="gamePage">
          <div className="playerShips">
            <ShipContainer />
          </div>
          <div className="gameBoard">
            <div className="player" id="player">
              <OpponentBoardRender test={test} playerMove={this.playerMove} />
            </div>
            {/* <div className="opponent" id="opponent"><BoardRender test={test}/></div> */}
          </div>
          <div className="opponentShips">
            <ShipContainer />
          </div>
        </div>
      </>
    );
  }
}
export default GameBoard;
