import React, { Component } from "react";
import "./dashboard.css";
import CreatePrivateGame from "../Buttons/CreatePrivateGame/CreatePrivateGame";
import CreateAiGame from "../Buttons/CreateAiGame/CreateAiGame";
import JoinRandomGame from "../Buttons/JoinRandomGame/JoinRandomGame";
import StatsButton from "../Buttons/StatsButton/StatsButton";
import planetblue from '../../Images/Planets/planetblue.png'
// import planetgreen from '../../Images/Planets/planetgreen.png'
import planetgreenstripe from '../../Images/Planets/planetgreenstripe.png'
// import planetpurple from '../../Images/Planets/planetpurple.png'
import planetred from '../../Images/Planets/planetred.png'
import planetyellow from '../../Images/Planets/planetyellow.png'
// import planetyellowbump from '../../Images/Planets/planetyellowbump.png'
// import planetyellowring from '../../Images/Planets/planetyellowring.png'
import Context from "../../Context"


class Dashboard extends Component {
  static contextType = Context;
  
  render() {
    return (
      <div>
        <div className="dashboardPage">
          <p>Welcome: {this.context.currentUser}</p>
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

export default Dashboard;
