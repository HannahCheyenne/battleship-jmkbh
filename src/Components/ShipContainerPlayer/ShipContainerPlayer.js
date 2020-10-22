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
    createShips = function(e) {
        //need to figure out how to build the ships out in x any y axis
        //create a function on an onclick when active that hides the button so the
        //ship can no longer be placed
        //need to create a rotate function that when clicked, switches the x and y
        //sounds simple enough
        let shipLength = 3
        if(e.target.id === "battleship") {
            console.log("battleship")
            shipLength = 5
        }
    }
    toggleRotation =function(e) {

    }

    render(){
        const {data} = this.props
        console.log(data)
        return(
            <div className="shipcontainer">
                <HealthBar {...this.props} />
                <button className="ship" onClick={this.createShips} id="battleship">Battleship</button>
                <button className="ship" onClick={this.createShips} id="spacecarrier">Space Carrier</button>
                <button className="ship" onClick={this.createShips} id="cruiser">Cruiser</button>
                <button className="ship" onClick={this.createShips} id="destroyer">Destroyer</button>
                <button className="ship" onClick={this.createShips} id="patrolship">Patrol Ship</button>
                <button className="ship" onClick={this.toggleRotation}>Rotate</button>
            </div>
        )
    }
}
export default ShipContainer