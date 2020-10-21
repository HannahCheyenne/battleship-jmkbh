import React, { Component } from 'react';
import './shipcontainer.css'

class ShipContainer extends Component{
    render(){
        const data = this.props.data
        console.log("ShipContainer -> render -> data", data)

        return(
            <div className="shipcontainer">
                <div>Battleship: {data[4]}</div>
                <div>Space Carrier: {data[3]}</div>
                <div>Cruiser: {data[2]}</div>
                <div>Destroyer: {data[1]}</div>
                <div>Patrol Ship: {data[0]}</div>
            </div>
        )
    }
}
export default ShipContainer