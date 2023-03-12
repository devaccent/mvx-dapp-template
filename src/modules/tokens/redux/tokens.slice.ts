import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { EsdtToken } from "../models";
import { EsdtTokensList, EsdtTokensMap } from "../types";

interface SliceState {
  esdtTokensMap: EsdtTokensMap;
  esdtTokensList: EsdtTokensList;
}

const initialState: SliceState = {
  esdtTokensMap: {},
  esdtTokensList: [],
};

const tokensSlice = createSlice({
  name: "tokens.data",
  initialState,
  reducers: {
    setEsdtTokens(state, action: PayloadAction<EsdtToken[]>) {
      const map: EsdtTokensMap = {};
      action.payload.forEach((item) => {
        map[item.identifier] = item;
      });

      state.esdtTokensList = action.payload;
      state.esdtTokensMap = map;
    },
  },
});

export default tokensSlice.reducer;
export const { setEsdtTokens } = tokensSlice.actions;
