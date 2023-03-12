import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { PingPongSlice } from "../../modules/ping-pong";
import { TokensSlice } from "../../modules/tokens";

const persistConfig = {
  storage,
  key: "root",
  whitelist: ["tokensData"],
};

const rootReducer = combineReducers({
  tokensData: TokensSlice,
  pingPongData: PingPongSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
