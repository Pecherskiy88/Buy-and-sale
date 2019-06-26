import React from "react";
import { Route, Switch } from "react-router-dom";

import Profile from "./socialApps/Profile";
import AllProducts from "./algolia/index";
import MyProducts from "./customViews/eCommerce/ProductList/index";

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}profile`} component={Profile} />
      <Route path={`${match.url}all-products`} component={AllProducts} />
      <Route path={`${match.url}my-products`} component={MyProducts} />
    </Switch>
  </div>
);

export default App;
