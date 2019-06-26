import React from "react";
import { Route, Switch } from "react-router-dom";

// компоненты
import Profile from "./socialApps/Profile";
import AllProducts from "./algolia/index";
import MyProducts from "./customViews/eCommerce/ProductList/index";
import MyOrders from "./MyOrders/index";

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}profile`} component={Profile} />
      <Route path={`${match.url}all-products`} component={AllProducts} />
      <Route path={`${match.url}my-products`} component={MyProducts} />
      <Route path={`${match.url}my-orders`} component={MyOrders} />
    </Switch>
  </div>
);

export default App;
