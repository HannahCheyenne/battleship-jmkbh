import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './statspage.css'
import BattleshipAPI from "../../services/battleship-api-service";
import Header from '../Header/Header'
import { getNodeText } from '@testing-library/react';

class UserPage extends Component{
    
    state = {
      battleshipD:0,
      carrierD:0,
      destroyerD:0,
      gameL:0,
      gameW:0,
      gamesP:0,
      patrolboatD:0,
      hits:0,
      misses:0,
      submarineD:0,
    };
      componentDidMount() {
        BattleshipAPI.getStats()
        .then((data) => {
          this.setState({
            battleshipD:data.stats.battleship_destroyed,
            carrierD:data.stats.carrier_destroyed,
            destroyerD:data.stats.destroyer_destroyed,
            gameL:data.stats.game_losses,
            gameW:data.stats.game_wins,
            gamesP:data.stats.games_played,
            patrolboatD:data.stats.patrolboat_destroyed,
            hits:data.stats.shots_hit,
            misses:data.stats.shots_missed,
            submarineD:data.stats.submarine_destroyed
          });
        });
      }
    render(){
      const { battleshipD, carrierD,destroyerD, gameL, gameW, gamesP, patrolboatD, hits, misses, submarineD } = this.state
      const totalShipsD = battleshipD + carrierD + destroyerD + patrolboatD + submarineD
      const totalShots = hits + misses
        return(
            <>
            <Header />
            <div className="statsPage">
                <h2>Welcome Back User!</h2>
                <Link to="/dashboard"><button>Go Back</button></Link>
                <h3>Your Stats</h3>
                <p>Total games played: {gamesP}</p>
                <p>Games won: {gameW}</p>
                <p>Games lost: {gameL}</p>
                <p>Total Shots Taken: {totalShots}</p>
                <p>Shots hit: {hits}</p>
                <p>Shots missed: {misses}</p>
                <p>Total Ships Destroyed: {totalShipsD}</p>
                <p>Battleships: {battleshipD}</p>
                <p>Space Carrier: {carrierD}</p>
                <p>Crusier: {submarineD}</p>
                <p>Destroyers: {destroyerD}</p>
                <p>Patrol Ships: {patrolboatD}</p>
            </div>
        </>

        )
    }
}

export default UserPage