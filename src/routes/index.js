import React from "react";
import { Route, Switch } from "react-router-dom";

import Profile from "./socialApps/Profile";

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}profile`} component={Profile} />
    </Switch>
  </div>
);

export default App;
