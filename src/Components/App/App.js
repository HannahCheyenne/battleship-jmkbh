import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import QuickGame from '../QuickGame/QuickGame'
import Demo from "../Demo/Demo";
import Register from "../Register/Register";
import PublicOnlyRoute from "../../Utils/PublicOnlyRoute";
import StatsPage from "../StatsPage/StatsPage";
import Audio from '../../services/audio'
import "./app.css";

export default class App extends Component {
  state = {
    currentTheme: null
  }

  handleGameTheme = () => {
    this.setState(
      {currentTheme: 'game.mp3'},
      () => Audio.playTheme(this.state.currentTheme)
    )
  }
  
  handleMenuTheme = () => {
    this.setState(
      {currentTheme: 'menu.mp3'},
      () => Audio.playTheme(this.state.currentTheme)
    )
  }
  
  handleWinTheme = () => {
    this.setState(
      {currentTheme: 'win.mp3'},
      () => Audio.playTheme(this.state.currentTheme)
    )
  }
  
  handleLoseTheme = () => {
    this.setState(
      {currentTheme: 'lose.mp3'},
      () => Audio.playTheme(this.state.currentTheme)
    )
  }

  render() {
    return (
      <div>
        <Switch>
          <PublicOnlyRoute component={Login} path="/login" />
          <PublicOnlyRoute component={Home} exact path="/" />
          <PublicOnlyRoute
            component={Register}
            path="/register"
          ></PublicOnlyRoute>
          <Route component={StatsPage} path="/stats"></Route>
          <Route component={Dashboard} path="/dashboard"></Route>
          <Route component={Demo} path="/demo"></Route>
          <Route component={QuickGame} path="/quickgame"></Route>
        </Switch>
      </div>
    );
  }
}