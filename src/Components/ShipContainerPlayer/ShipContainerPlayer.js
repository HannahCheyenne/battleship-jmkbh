import React, { Component } from 'react';
import HealthBar from '../GameBoard/HealthBar/HealthBar';
import './shipcontainerplayer.css'

class ShipContainer extends Component{

    // toggleRotation = function(e) {
    //     // Toggle rotation direction
    //     let direction = parseInt(e.target.getAttribute('direction'), 10);
    //     if (direction === Ship.DIRECTION_VERTICAL) {
    //         e.target.setAttribute('data-direction', '1');
    //         placeShipDirection = Ship.DIRECTION_HORIZONTAL;
    //     } else if (direction === Ship.DIRECTION_HORIZONTAL) {
    //         e.target.setAttribute('data-direction', '0');
    //         Game.placeShipDirection = Ship.DIRECTION_VERTICAL;
    //     }
    // };

    toggleRotation =function(e) {

    }
    
    render(){
        const {data} = this.props
        const {ships} = this.props
        return(
            <div className="shipcontainer">
                <HealthBar {...this.props} />
                {ships.createShips.map((i, index) => (<button className="ship" onClick={this.createShips} id={`${index}`.type}>{i.type}</button>))}
                <button className="ship" onClick={this.toggleRotation}>Rotate</button>
            </div>
        )
    }
}
export default ShipContainer