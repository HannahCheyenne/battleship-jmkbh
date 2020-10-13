import React from "react";
import { Route, Switch } from 'react-router-dom'
import Login from '../Login/Login'
import Home from '../Home/Home'
import PublicOnlyRoute from '../../Utils/PublicOnlyRoute'


function App() {
  return (
    <div>
      <Switch>
      <PublicOnlyRoute component={Login} path="/login">
          </PublicOnlyRoute>
      <PublicOnlyRoute component={Home} exact path="/">
          </PublicOnlyRoute>
      </Switch>
    </div>
  );
}

export default App;
