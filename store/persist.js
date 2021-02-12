import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist"
import rootReducer from "./index"
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"

const persistConfig = {
	key: "root",
	version: 1,
	storage,
	whitelist: ["user"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
// const store = configureStore({ reducer: rootReducer });
export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
})

export const persistor = persistStore(store)
