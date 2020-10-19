import React, { Component } from 'react';
import "./createprivategame.css"
//this component creates a private game based on players unique game room id
class CreatePrivateGame extends Component{
    render(){
        return(
            <button className="gameButton">Private Game</button>
        )
    }
}

export default CreatePrivateGame