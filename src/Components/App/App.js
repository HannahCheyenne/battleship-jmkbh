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
import "./app.css";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <PublicOnlyRoute component={Login} path="/login"></PublicOnlyRoute>
          <PublicOnlyRoute component={Home} exact path="/"></PublicOnlyRoute>
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

export default App;
