import React, { Component } from 'react';
import BoardRender from '../BoardRender/BoardRender'
import Header from '../Header/Header';
import ShipContainer from '../ShipContainer/ShipContainer';
import './gameboard.css'

class GameBoard extends Component{
    state = {
        // board:
        // health:
        // player_turn:
        // active_game:false
      };

    // handlePlayerMove = (e) => {
    //     e.preventDefault()
    //   BattleshipApi.postMove(co)
    //this.setState({

    // })
    //     
    // }
    handleAiMove = () => {
        
    }
    render(){
        const test = [
            [
              [1, 1, 1, 5, 5, 5, 5, 5],
              [1, 1, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 1, 1, 1, 1],
              [1, 1, 4, 4, 4, 4, 1, 1],
              [1, 1, 1, 1, 1, 1, 1, 1],
              [1, 1, 3, 3, 3, 1, 1, 1],
              [1, 1, 1, 1, 1, 1, 1, 1],
              [1, 3, 3, 3, 1, 1, 2, 2],
            ]
        ]
        console.log(test)
        return(<>
        <Header />
        <div className="gamePage">
        <div className="playerShips"><ShipContainer /></div>
            <div className="gameBoard">
                <div className="player" id="player"><BoardRender /></div>
                <div className="opponent" id="opponent"><BoardRender test={test}/></div>
            </div>
            <div className="opponentShips"><ShipContainer /></div>
            </div>
            </>
        )
    }
}
export default GameBoard