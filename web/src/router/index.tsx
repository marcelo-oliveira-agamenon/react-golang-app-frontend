import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PreLogin from "../container/pre-login";
import Login from "../container/login";
import Signup from "../container/signup";
import Home from "../container/home";
import ResetPassword from "../container/resetPassword";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/prelogin" />
        <Route path="/prelogin" component={PreLogin} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/resetPassword" component={ResetPassword} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
