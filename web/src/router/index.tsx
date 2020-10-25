import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PreLogin from "../container/pre-login";
import Login from "../container/login";
import Signup from "../container/signup";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/prelogin" component={PreLogin} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
