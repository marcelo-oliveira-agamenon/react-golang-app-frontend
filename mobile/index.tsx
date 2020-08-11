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

registerRootComponent(Main);
