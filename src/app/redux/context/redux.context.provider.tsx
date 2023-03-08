import React, { PropsWithChildren } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Loader } from "../../../components/themed";

import { store, persistStore } from "../store";

export function ReduxContextProvider(props: PropsWithChildren) {
  const { children } = props;

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<Loader />} persistor={persistStore}>
        {children}
      </PersistGate>
    </ReduxProvider>
  );
}
