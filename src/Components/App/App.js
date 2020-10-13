import React from "react";
import { Route, Switch } from 'react-router-dom'
import Login from '../Login/Login'
import Home from '../Home/Home'
import Dashboard from '../Dashboard/Dashboard'
import Register from '../Register/Register'
import PublicOnlyRoute from '../../Utils/PublicOnlyRoute'
import StatsPage from "../StatsPage/StatsPage";


function App() {
  return (
    <div>
      <Switch>
      <PublicOnlyRoute component={Login} path="/login">
          </PublicOnlyRoute>
      <PublicOnlyRoute component={Home} exact path="/">
          </PublicOnlyRoute>
      <PublicOnlyRoute component={Register} path="/register">
          </PublicOnlyRoute>
          <Route component={StatsPage} path='/stats'></Route>
          <Route component={Dashboard} path='/dashboard'></Route>
      </Switch>
    </div>
  );
}

export default App;
