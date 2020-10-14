import React, { Component } from 'react';
import "./quickgamebutton.css"

//this component will allow the two players to have a rematch in the same room
// if one player leaves, this will allow a player to stay in the same game room and wait for another player to join
class QuickGameButton extends Component{
    render(){
        return(
            <button>Play Quick Game</button>
        )
    }
}

export default QuickGameButton