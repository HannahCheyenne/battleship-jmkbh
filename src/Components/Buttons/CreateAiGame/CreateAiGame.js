import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./createaigame.css"
//this component created a random game with the computer
class CreateAiGame extends Component{
    render(){
        return(
            <Link to="/game"><button className="gameButton">Single Player</button></Link>
        )
    }
}

export default CreateAiGame