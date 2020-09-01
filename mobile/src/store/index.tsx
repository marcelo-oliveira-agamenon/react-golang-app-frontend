import { createStore, compose, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import rootReducer, { Types } from "./reducer";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

const persistConfig: PersistConfig<any, any, any, any> = {
	key: "authInfo",
	storage: AsyncStorage,
	whitelist: [Types.LOGGEDUSER, Types.TOKEN],
};

const persistedReducer: any = persistReducer(persistConfig, rootReducer);

export const store: Store = createStore(
	persistedReducer,
	compose(applyMiddleware(thunk))
);
export const persistedStore: any = persistStore(store);
