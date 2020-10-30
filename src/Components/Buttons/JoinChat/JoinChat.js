import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './JoinChat.css'
import Context from '../../../Context'


//this component created a random game with the computer
class JoinChat extends Component{
    static contextType = Context;

    // handleClick = () => {
    //     this.context.handleTheme('menu.mp3')
    // }

    render(){
        const userName = this.context.currentUser;
        const chatRoom = 'Space Chat';
        
        return(
            <Link to={`/activeChat?name=${userName}&room=${chatRoom}`}><button className="gameButton">Join Chat</button></Link>
        )
    }
}

export default JoinChat;