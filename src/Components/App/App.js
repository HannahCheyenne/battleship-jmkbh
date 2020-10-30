import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import LandingPage from "../LandingPage/LandingPage";
import Dashboard from "../Dashboard/Dashboard";
import QuickGame from '../QuickGame/QuickGame';
import RandomGameBoard from '../RandomGameBoard/RandomGameBoard';
import ContactPage from '../ContactPage/ContactPage';
import Register from "../Register/Register";
import PublicOnlyRoute from "../../Utils/PublicOnlyRoute";
import PrivateOnlyRoute from "../../Utils/PrivateOnlyRoute";
import StatsPage from "../StatsPage/StatsPage";
import Audio, {isMuted} from '../../services/audio';
import "./app.css";
import GameBoard from "../GameBoard/GameBoard";
import Context from '../../Context';
import Header from '../Header/Header';

export default class App extends Component {
  state = {
    currentTheme: null,
    gameStarted: false,
    isMuted
  };

  /*
  Themes are:
  'game.mp3'
  'menu.mp3'
  'win.mp3'
  'lose.mp3'
  */

  handleTheme = (theme=null) => {
    theme
      ? this.setState(
          {currentTheme: theme},
          () => Audio.playTheme(this.state.currentTheme)
        )
      : this.setState(
          {currentTheme: null},
          () => Audio.stop()
        )
  };

  handleMute = () => {
    this.setState({isMuted: !isMuted}, () => Audio.mute())
  };

  render() {
    const value = {
      currentTheme: this.state.currentTheme,
      isMuted: this.state.isMuted,
      handleTheme: this.handleTheme,
      handleMute: this.handleMute,
      handleVolume: this.handleVolume
    };
    return (
      <div>
        <Context.Provider value={value}>
           <Route component={Header} path='/' />
          <Switch>
            <PublicOnlyRoute component={Login} path="/login" />
            <Route component={ContactPage} exact path="/contact" />
            <PublicOnlyRoute component={Register} path="/register" />
            <PrivateOnlyRoute component={StatsPage} path="/stats"/>
            <PrivateOnlyRoute component={Dashboard} path="/dashboard"/>
            <PrivateOnlyRoute component={QuickGame} path="/quickgame"/>
            <PrivateOnlyRoute component={GameBoard} path="/game"/>
            <PrivateOnlyRoute component={RandomGameBoard} path="/randomgame"/>
            <Route component={LandingPage} exact path="/" />
          </Switch>
        </Context.Provider>
      </div>
    );
  };
};