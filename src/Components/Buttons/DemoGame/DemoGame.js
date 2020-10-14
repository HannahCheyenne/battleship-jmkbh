import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './demogame.css'
//this component will join the demo version of the game against the ai
class DemoGame extends Component{
    render(){
        return(
            <Link to="/demo"><button>Demo Game</button></Link>
        )
    }
}

export default DemoGame