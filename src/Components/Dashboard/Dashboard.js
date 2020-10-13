import React, { Component } from'react'
import './dashboard.css'
import Header from '../Header/Header'
import CreatePrivateGame from '../Buttons/CreatePrivateGame'
import CreateAiGame from '../Buttons/CreateAiGame'
import JoinRandomGame from '../Buttons/JoinRandomGame'
import StatsButton from '../Buttons/StatsButton'

class Dashboard extends Component{
    render(){
        return(
            <>
            <Header />
            <CreatePrivateGame />
            <CreateAiGame />
            <JoinRandomGame />
            <StatsButton />
            </>
        )
    }
}

export default Dashboard