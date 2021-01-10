import { createStore, compose, applyMiddleware } from "redux";
import rootReducer, { types } from "./reducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "authInfo",
  storage: storage,
  whitelist: [types.API_TOKEN, types.LOGGED_USER, types.CART],
};
const pReducer: any = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, compose(applyMiddleware(thunk)));
export const pStore = persistStore(store);
