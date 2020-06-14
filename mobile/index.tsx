import React from "react";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { Store } from "./src/store/index";
import App from "./src/App";

const Main = () => {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Main);
