import React, { Component } from 'react';
import BoardRender from '../BoardRender/BoardRender'
import Header from '../Header/Header';
import './gameboard.css'

class GameBoard extends Component{
    render(){
        return(<>
        <Header />
            <div className="gamePage">
                <div className="player"><BoardRender /></div>
                <div className="opponent"><BoardRender /></div>
            </div>
            </>
        )
    }
}
export default GameBoard