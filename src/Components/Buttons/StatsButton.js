import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./stats.css"

class StatsButton extends Component{
    render(){
        return(
            <Link to="/stats"><button>Stats</button></Link>
        )
    }
}

export default StatsButton