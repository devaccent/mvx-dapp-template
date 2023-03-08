import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { PingPongSlice } from "../../modules/ping-pong";

const persistConfig = {
  storage,
  key: "root",
  whitelist: [],
};

const rootReducer = combineReducers({
  pingPongData: PingPongSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
