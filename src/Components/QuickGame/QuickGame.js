import React, { Component } from "react";
import QuickGameButton from "../Buttons/QuickGameButton/QuickGameButton";
import Header from "../Header/Header";
import './quickgame.css'

class QuickGame extends Component{
    render(){
        return(
            <div className="quickgamePage">
            <Header />
            <div><h2>Quick Game</h2></div>
            <p>Play a quick game agains the AI</p>
            <QuickGameButton />
            </div>
        )
    }
}

export default QuickGame