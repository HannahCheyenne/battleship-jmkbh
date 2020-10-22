import React, { Component } from 'react'
import './healthbar.css'

export default class HealthBar extends Component{
    

    render(){
        const {data} = this.props
        console.log(data)
        return(
            <div className="healthBar">
                health
            </div>
        )
    }
}