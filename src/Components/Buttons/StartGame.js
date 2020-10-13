import React, { Component } from 'react';
import "./startgame.css"
//this component will start the game after all the game pieces are on the board
//will not be enabled until all the pieces are on the board
//can do that by checking if the game piece box is empty, or if all piece are on the board???
class StartGame extends Component{
    render(){
        return(
            <button>Start Game</button>
        )
    }
}

export default StartGame