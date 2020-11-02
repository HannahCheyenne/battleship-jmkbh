import React, { Component } from "react";
import DemoAccount from '../Buttons/DemoAccount/DemoAccount'
// import spaceBackground from '../../Images/spaceBackground.jpg'
import { Link } from "react-router-dom";
import "./landingpage.css";
import QuickGameButton from "../Buttons/QuickGameButton/QuickGameButton";

class LandingPage extends Component {
  static defaultProps = {history: {push: ()=> {}} }

  render() {
    return (<>
      <div className="landingPage">
        {/* <div className="starmap"><img src={spaceBackground} alt="Logo" /></div> */}
        <fieldset className="aboutContent">
          <h2>Welcome to Space Battleship!</h2>
          <p>To see what our app is all, hit the demo button and take a tour.</p>
          <p>If you're just interested in playing against our super intelligent AI, 
            hit the Quick Game button. </p>
          <p>If you've been here before, <Link to="/login">login</Link>, 
          or if you're new, <Link to="/register">register</Link> for a new account.</p>
          
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
