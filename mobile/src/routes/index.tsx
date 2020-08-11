import React from "react";
//import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "../screens/main/index";
import LoginScreen from "../screens/login/index";

//const Stack = createStackNavigator();

function Routes() {
  return (
    <>
      {/* <MainScreen /> */}
      <LoginScreen />
    </>
  );
}

export default Routes;
