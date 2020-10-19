import React, { Component } from 'react';
import "./startgame.css"
import Context from '../../../Context'
import Audio from '../../../services/audio'

//this component will start the game after all the game pieces are on the board
//will not be enabled until all the pieces are on the board
//can do that by checking if the game piece box is empty, or if all piece are on the board???
class StartGame extends Component{
    static contextType = Context;

    /*
    Conditional for click sound:

    (game piece box is empty)
        ? Audio.err()
        : Audio.click()

    */


    handleClick = () => {
        this.context.handleTheme('game.mp3')
    }

    render(){
        return(
            <button onClick={this.handleClick}>Start Game</button>
        )
    }
}

export default StartGame