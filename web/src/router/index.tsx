import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { verifyLoggedUser } from "../ducks/auth";

import PreLogin from "../container/pre-login";
import Login from "../container/login";
import Signup from "../container/signup";
import ResetPassword from "../container/reset-password";
import Home from "../container/home";
import Search from "../container/search-page";
import Categories from "../container/categories";
import Favorites from "../container/favorites";
import MyProfile from "../container/my-profile";
import Product from "../container/product-page";
import Cart from "../container/cart";
import Orders from "../container/orders";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/prelogin" />
        <Route path="/prelogin" component={PreLogin} />
        <Route path="/login" component={Login} />
        <Route path="/resetPassword" component={ResetPassword} />
        <Route path="/signup" component={Signup} />

        <ProtectedRoute path="/home" component={Home} />
        <ProtectedRoute path="/search" component={Search} />
        <ProtectedRoute path="/categories" component={Categories} />
        <ProtectedRoute path="/favorites" component={Favorites} />
        <ProtectedRoute path="/myProfile" component={MyProfile} />
        <ProtectedRoute path="/product" component={Product} />
        <ProtectedRoute path="/cart" component={Cart} />
        <ProtectedRoute path="/orders" component={Orders} />
      </Switch>
    </BrowserRouter>
  );
}

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        let user = verifyLoggedUser();
        if (user) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/prelogin" />;
        }
      }}
    />
  );
};

export default Routes;
