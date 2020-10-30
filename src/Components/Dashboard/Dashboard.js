import React, { Component } from "react";
import Audio from '../../services/audio'
import "./dashboard.css";
import CreatePrivateGame from "../Buttons/CreatePrivateGame/CreatePrivateGame";
import CreateAiGame from "../Buttons/CreateAiGame/CreateAiGame";
import JoinRandomGame from "../Buttons/JoinRandomGame/JoinRandomGame";
import StatsButton from "../Buttons/StatsButton/StatsButton";
import planetblue from '../../Images/Planets/planetblue.png'
import planetgreenstripe from '../../Images/Planets/planetgreenstripe.png'
import planetred from '../../Images/Planets/planetred.png'
import planetyellow from '../../Images/Planets/planetyellow.png'

export default class Dashboard extends Component {
  componentDidMount() {
    Audio.stop()
  }
  render() {
    return (
      <div>
        <div className="dashboardPage">
          <div className="dashboardButtonContainer">
            <div className="buttonImageCombo">
              <img className="dashimage"src={planetblue} alt=""/>
              <StatsButton />
            </div>
            <div className="buttonImageCombo">
              <img className="dashimage"src={planetred} alt=""/>
              <CreateAiGame />
            </div>
          </div>
          <div className="dashboardButtonContainer">
            <div className="buttonImageCombo">
              <img className="dashimage"src={planetyellow} alt=""/>
              <JoinRandomGame />
            </div>
            <div className="buttonImageCombo">
              <img className="dashimage"src={planetgreenstripe} alt=""/>
              <CreatePrivateGame />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

