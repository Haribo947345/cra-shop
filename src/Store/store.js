import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import memberSlice from "./MemberSlice";
import basketsSlice from "./BasketsSlice";

const reducers = combineReducers({
  isLoggedIn: memberSlice.reducer,
  basketsSlice: basketsSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
