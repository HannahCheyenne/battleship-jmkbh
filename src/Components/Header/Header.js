import React, { Component } from "react";
import TokenService from "../../services/token-service";
import { Link } from "react-router-dom";
import Audio from '../../services/audio'
import Context from '../../Context'
import "./header.css";

class Header extends Component {
  static contextType = Context;

  /*
  Themes are:
  'ambiance.mp3'
  'game.mp3'
  'menu.mp3'
  'win.mp3'
  'lose.mp3'
  */


// This should be stylized later
renderMuteButton = () => {
  return (this.context.isMuted === true
  ? <button className='muteButton' onClick={this.context.handleMute}>Unmute</button>
  : <button className='muteButton' onClick={this.context.handleMute}>Mute</button>)
}

  renderLoginLink() {
    return (
      <nav>
        <Link to="/login">Login</Link> 
        <Link to="/register">Register</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    );
  }
  renderHeaderLink() {
    return (
      <Link to='/'>Space Battleship</Link>
    )
  }
  renderHeaderNoLink(){
    return (
      `Space Battleship`
    )
  }
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }
  renderLogoutLink() {
    return (
      <div>
        <nav>
          <Link onClick={this.handleLogoutClick} to="/login">
            Logout
          </Link>
        </nav>
      </div>
    );
  }
  render() {
    return (
      <div>
        <header>
          <h1>{TokenService.hasAuthToken()
            ? this.renderHeaderNoLink()
            : this.renderHeaderLink()}
          </h1>
          <span className="headerAudio">
          {this.renderMuteButton()}
          <input type="range" min="-30" max="0" onChange={this.context.handleVolume}/>
          </span>
          <span>
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </span>
        </header>
      </div>
    );
  }
}
export default Header;
