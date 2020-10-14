import React, { Component } from 'react'
import Header from '../Header/Header'
import './demo.css'

class Demo extends Component{
    render(){
        return(
            <div className=" demoPage">
                <Header />
                <h2>Demo Page</h2>
            </div>
        )
    }
}

export default Demo