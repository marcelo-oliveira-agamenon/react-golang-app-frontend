import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PreLogin from "../container/pre-login";
import Login from "../container/login";
import Signup from "../container/signup";
import ResetPassword from "../container/resetPassword";
import Home from "../container/home";
import Search from "../container/search-page";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/prelogin" />
        <Route path="/prelogin" component={PreLogin} />
        <Route path="/login" component={Login} />
        <Route path="/resetPassword" component={ResetPassword} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
