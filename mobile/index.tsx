import React from "react";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { store, persistedStore } from "./src/store/index";
import { PersistGate } from "redux-persist/integration/react";
import App from "./src/App";

const Main = () => {
	return (
		<PersistGate persistor={persistedStore} loading={false}>
			<Provider store={store}>
				<App />
			</Provider>
		</PersistGate>
	);
};

registerRootComponent(Main);
