import React, { Component } from 'react';
import './shipcontainer.css'

class ShipContainer extends Component{
    render(){
        return(
            <div className="shipcontainer">
                <div>Battleship</div>
                <div>Space Carrier</div>
                <div>Cruiser</div>
                <div>Destroyer</div>
                <div>Patrol Ship</div>
            </div>
        )
    }
}
export default ShipContainer