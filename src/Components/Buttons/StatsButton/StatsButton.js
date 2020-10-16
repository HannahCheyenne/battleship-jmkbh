import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./stats.css"

class StatsButton extends Component{
    render(){
        console.log()
        return(
            <Link to={"/stats"}><button>Stats</button></Link>
        )
    }
}

export default StatsButton