import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../container/login/index";
import Dashboard from "../container/dashboard/index";
import SignUp from "../container/signup/form";
import Products from "../container/products/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/products" exact component={Products} />
      </Switch>
    </BrowserRouter>
  );
}
