import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore as persistStoreHandler } from "redux-persist";

import rootReducer from "./root-reducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (defaults) =>
    defaults({
      immutableCheck: false,
      serializableCheck: false,
    }).concat([logger]),
});

export const persistStore = persistStoreHandler(store);
