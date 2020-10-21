import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Audio from '../../../services/audio'
import "./stats.css"

class StatsButton extends Component{
    handleClick = () => {
        Audio.soft()
    }
    render(){
        return(
            <Link to={"/stats"}><button className="gameButton" onClick={this.handleClick}>Stats</button></Link>
        )
    }
}

export default StatsButton