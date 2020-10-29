import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./createaigame.css"
import Context from '../../../Context'

//this component created a random game with the computer
class CreateAiGame extends Component{
    static contextType = Context;

    // handleClick = () => {
    //     this.context.handleTheme('menu.mp3')
    // }

    render(){
        return(
            <Link to="/game"><button className="gameButton">Single Player</button></Link>
        )
    }
}

export default CreateAiGame