import React, { Component } from 'react'
import './healthbar.css'

export default class HealthBar extends Component{
    

    render(){
        const {health} = this.props
        console.log(health)
        let i = health.reduce((a, b) => {return a + b})

        
        return(
            <div className="health">
            <div className='healthBar'>
                <div className={`healthBar val${i}`}></div>
            </div>
            </div>
        )
    }
}