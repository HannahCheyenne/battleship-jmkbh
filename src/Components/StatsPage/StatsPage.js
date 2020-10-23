import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './statspage.css'
import BattleshipAPI from "../../services/battleship-api-service";

class UserPage extends Component{
    
    state = {
      battleshipD:0,
      carrierD:0,
      destroyerD:0,
      patrolboatD:0,
      submarineD:0,
      gameL:0,
      gameW:0,
      gamesP:0,
      hits:0,
      misses:0,
    };
      componentDidMount() {
        BattleshipAPI.getStats()
        .then((data) => {
          this.setState({
            battleshipD:data.battleship_destroyed,
            carrierD:data.carrier_destroyed,
            destroyerD:data.destroyer_destroyed,
            gameL:data.game_losses,
            gameW:data.game_wins,
            gamesP:data.games_played,
            patrolboatD:data.patrolboat_destroyed,
            hits:data.shots_hit,
            misses:data.shots_missed,
            submarineD:data.submarine_destroyed
          });
        });
      }
    render(){
      const { battleshipD, carrierD,destroyerD, gameL, gameW, gamesP, patrolboatD, hits, misses, submarineD } = this.state
      const totalShipsD = battleshipD + carrierD + destroyerD + patrolboatD + submarineD
      const totalShots = hits + misses
        return(
            <>
            <div className="statsPage">
                <h2>Your Stats</h2>
                <p>Total games played: {gamesP}</p>
                <p>Games won: {gameW}</p>
                <p>Games lost: {gameL}</p>
                <p>Total Shots Taken: {totalShots}</p>
                <p>Shots hit: {hits}</p>
                <p>Shots missed: {misses}</p>
                <p>Total Ships Destroyed: {totalShipsD}</p>
                <p>Battleships: {battleshipD}</p>
                <p>Space Carrier: {carrierD}</p>
                <p>Cruiser: {submarineD}</p>
                <p>Destroyers: {destroyerD}</p>
                <p>Patrol Ships: {patrolboatD}</p>
            <Link to="/dashboard"><button>Go Back</button></Link>
            </div>
        </>

        )
    }
}

export default UserPage