import React, { Component } from 'react';
import "./createprivategame.css"
import Context from '../../../Context'

//this component creates a private game based on players unique game room id
class CreatePrivateGame extends Component{
    static contextType = Context;

    // handleClick = () => {
    //     this.context.handleTheme('menu.mp3')
    // }

    render(){
        return(
            <button className="gameButton">Private Game</button>
        )
    }
}

export default CreatePrivateGame