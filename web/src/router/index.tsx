import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../container/login/index";
import Dashboard from "../container/dashboard/index";
import SignUp from "../container/signup/form";
import Product from "../container/products/index";

const mapStateToProps = (state: { loggedUser: {} }) => {
  return {
    loggedUser: state.loggedUser,
  };
};

export interface props {
  loggedUser?: any;
}

function Routes(props: props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        {props?.loggedUser ? (
          <>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/dashboard/products" exact component={Product} />
          </>
        ) : null}
      </Switch>
    </BrowserRouter>
  );
}

export default connect(mapStateToProps, null)(Routes);
