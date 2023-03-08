import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ServerTransactionType } from "@multiversx/sdk-dapp/types";

import { DataStatus } from "../../../app/enums";

interface SliceState {
  status: DataStatus;
  errorMessage: string | undefined;
  transactions: ServerTransactionType[];
}

const initialState: SliceState = {
  transactions: [],
  status: DataStatus.Initial,
  errorMessage: undefined,
};

const slice = createSlice({
  name: "ping-pong.data",
  initialState,
  reducers: {
    setLoadingTransactions(state) {
      const hasData = [DataStatus.Loading || DataStatus.Reloading].includes(state.status);
      state.status = hasData ? DataStatus.Reloading : DataStatus.Loading;
    },
    setLoadingError(state, action: PayloadAction<string>) {
      state.status = DataStatus.Error;
      state.errorMessage = action.payload;
    },
    setTransactions(state, action: PayloadAction<ServerTransactionType[]>) {
      state.status = DataStatus.Loaded;
      state.transactions = action.payload;
      state.errorMessage = initialState.errorMessage;
    },
  },
});

export default slice.reducer;
export const { setTransactions, setLoadingTransactions, setLoadingError } = slice.actions;
