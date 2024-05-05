import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as RoutesPath,
  Navigate,
  RouteProps,
} from 'react-router-dom';
import { verifyLoggedUser } from '../ducks/auth';

import PreLogin from 'container/pre-login';
import Login from 'container/login';
import Signup from 'container/signup';
import ResetPassword from 'container/reset-password';
import Home from 'container/home';
import Search from 'container/search-page';
import Categories from 'container/categories';
import Favorites from 'container/favorites';
import MyProfile from 'container/my-profile';
import Product from 'container/product-page';
import Cart from 'container/cart';
import Orders from 'container/orders';

function Routes() {
  return (
    <BrowserRouter>
      <RoutesPath>
        {/* <Navigate to="/prelogin" />
        <Route path="/prelogin" element={<PreLogin />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/resetPassword/:code" element={<ResetPassword />} />
        <Route path="/signup" element={<Signup />} />

        <ProtectedRoute path="/home" element={<Home />} />
        <ProtectedRoute path="/search" element={<Search />} />
        <ProtectedRoute path="/categories" element={<Categories />} />
        <ProtectedRoute path="/favorites" element={<Favorites />} />
        <ProtectedRoute path="/myProfile" element={<MyProfile />} />
        <ProtectedRoute path="/product" element={<Product />} />
        <ProtectedRoute path="/cart" element={<Cart />} />
        <ProtectedRoute path="/orders" element={<Orders />} /> */}
      </RoutesPath>
    </BrowserRouter>
  );
}

const ProtectedRoute = ({ element, ...rest }: RouteProps) => {
  const user = verifyLoggedUser();
  const el = !!user ? element : <Navigate to="/prelogin" />;

  return <Route {...rest} element={el} />;
};

export default Routes;
