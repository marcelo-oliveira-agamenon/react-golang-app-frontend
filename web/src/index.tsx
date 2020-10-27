import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, pStore } from "./store/store";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={pStore}>
      <ToastProvider autoDismiss={true} autoDismissTimeout={3000}>
        <App />
      </ToastProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
