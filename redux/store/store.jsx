import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/dist/query/react";
import { mutationApi } from "../api/mutationApi";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import themeReducer from "../slice/theme";

import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";
const reducers = combineReducers({
  [mutationApi.reducerPath]: mutationApi.reducer,
  theme: themeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(mutationApi.middleware),
});

// export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector;
// export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
setupListeners(store.dispatch);

export default store;
