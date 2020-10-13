import React from "react";

function App() {
  return (
    <div>
      <Switch>
      <Route component={Login} path="/login">
          </Route>
      <Route component={Home} exact path="/">
          </Route>
      </Switch>
    </div>
  );
}

export default App;
