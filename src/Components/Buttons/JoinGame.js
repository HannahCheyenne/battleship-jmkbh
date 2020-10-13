import React, { Component } from 'react';
import 'joingame.css'
//this component will look for and join a new game when the person is ready to play.
//i'm thinking if a new game isn't already created, this is the thing that will create a new instance of a game
class JoinGame extends Component{
    render(){
        return(
            <button>Join Game</button>
        )
    }
}

export default JoinGame