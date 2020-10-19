import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import LandingPage from "../LandingPage/LandingPage";
import Dashboard from "../Dashboard/Dashboard";
import QuickGame from '../QuickGame/QuickGame'
import ContactPage from '../ContactPage/ContactPage'
import Demo from "../Demo/Demo";
import Register from "../Register/Register";
import PublicOnlyRoute from "../../Utils/PublicOnlyRoute";
import PrivateOnlyRoute from "../../Utils/PrivateOnlyRoute";
import StatsPage from "../StatsPage/StatsPage";
import Audio, {isMuted} from '../../services/audio'
import "./app.css";
import GameBoard from "../GameBoard/GameBoard";
import Context from '../../Context'

export default class App extends Component {
  state = {
    currentTheme: null,
    isMuted
  }

  /*
  Themes are:
  'ambiance.mp3'
  'game.mp3'
  'menu.mp3'
  'win.mp3'
  'lose.mp3'
  */

  handleTheme = (theme) => {
    this.setState(
      {currentTheme: theme},
      () => Audio.playTheme(this.state.currentTheme)
    )
  }

  handleMute = () => {
    this.setState({isMuted: !isMuted}, () => Audio.mute())
  }

  // This should be stylized later
  renderMuteButton = () => {
    return (this.state.isMuted === true
    ? <button className='muteButton' onClick={this.handleMute}>Unmute</button>
    : <button className='muteButton' onClick={this.handleMute}>Mute</button>)
  }

  render() {
    const value = {
      handleTheme: this.handleTheme,
      handleMute: this.handleMute,
    }
    return (
      <div>
        <Context.Provider value={value}>
          <Switch>
            <PublicOnlyRoute component={Login} path="/login" />
            <Route component={LandingPage} exact path="/" />
            <Route component={ContactPage} exact path="/contact" />
            <PublicOnlyRoute component={Register} path="/register" />
            <PrivateOnlyRoute component={StatsPage} path="/stats"/>
            <PrivateOnlyRoute component={Dashboard} path="/dashboard"/>
            <PrivateOnlyRoute component={Demo} path="/demo"/>
            <PrivateOnlyRoute component={QuickGame} path="/quickgame"/>
            <PrivateOnlyRoute component={GameBoard} path="/game"/>
          </Switch>
          {this.renderMuteButton()}
        </Context.Provider>
      </div>
    );
  }
}