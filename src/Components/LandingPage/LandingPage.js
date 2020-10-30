import React, { Component } from "react";
import DemoAccount from '../Buttons/DemoAccount/DemoAccount'
// import spaceBackground from '../../Images/spaceBackground.jpg'
import "./landingpage.css";
import QuickGameButton from "../Buttons/QuickGameButton/QuickGameButton";

class LandingPage extends Component {
  static defaultProps = {history: {push: ()=> {}} }

  render() {
    console.log(this.props.history.location)
    return (<>
      <div className="landingPage">
        {/* <div className="starmap"><img src={spaceBackground} alt="Logo" /></div> */}
        <fieldset className="aboutContent">
          <h2>Players</h2>
            <p>Play vs Player or play a game against the Ai</p>
          <h2>Goal</h2>
            <p>Destroy your opponents battleship</p>
          
          <h2>Rules</h2>
            <p>Rule number 1 goes here</p>
            <p>Rule number 2 goes here, elaborate</p>
            <p>Rule number 3 goes here with some explanation, lots of explanation</p>
          
          <h2>Buttons</h2>
            <p>Explain what the Demo button does</p>
            <p>Explain what the quick game does</p>
          
        </fieldset>
        <div className="landingPageButtonGroup">
          <span><DemoAccount history={this.props.history}/></span>
          <span><QuickGameButton history={this.props.history}/></span>
        </div>
      </div>
      </>
    );
  }
}

export default LandingPage;
