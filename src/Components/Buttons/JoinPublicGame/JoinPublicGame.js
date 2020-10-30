import React, { Component } from 'react';
import './joinpublicgame.css'
import Context from '../../../Context'
import { Link } from 'react-router-dom';

//this component will look for and join a new game when the person is ready to play.
//i'm thinking if a new game isn't already created, this is the thing that will create a new instance of a game
class JoinRandomGame extends Component{
    static contextType = Context;

    handleClick = () => {
        //this.context.handleTheme('menu.mp3')
        //needs to create random id, connect to socket.io, connect to RandomGameBoard
        
    }

    render(){
        return(
            <Link to="/randomgame"><button className="gameButton" onClick={this.handleClick}>Public Game</button></Link>
        )
    }
}

export default JoinRandomGame