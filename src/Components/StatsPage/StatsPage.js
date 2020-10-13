import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './statspage.css'
import Header from '../Header/Header'

class UserPage extends Component{
    render(){
        return(
            <>
            <Header />
            <div>
                <h2>Welcome Back User!</h2>
                <Link to="/dashboard"><button>Go Back</button></Link>
                <h3>Your Stats</h3>
                <p>Total games played:</p>
                <p>Games won:</p>
                <p>Games lost:</p>
                <p>Total Shots Taken:</p>
                <p>Shots hit:</p>
                <p>Shots missed:</p>
                <p>Total Ships Destroyed:</p>
                <p>Battleships:</p>
                <p>Freighter:</p>
                <p>Fighters:</p>
                <p>Destroyers:</p>
                <p>Patrol Ships:</p>
            </div>
        </>

        )
    }
}

export default UserPage