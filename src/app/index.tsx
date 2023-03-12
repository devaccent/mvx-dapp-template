import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./app.scss";

import { ThemeProvider } from "../theme";
import { MvxDappContext, MvxAxiosContext } from "../libs/mvx";

import { AppInitGate } from "./gates";
import { ReduxContextProvider } from "./redux";
import { ApplicationRouter } from "./navigation";
import AppDataLoader from "./data/app-data.loader";

function App() {
  return (
    <MvxAxiosContext>
      <BrowserRouter>
        <ThemeProvider>
          <ReduxContextProvider>
            <AppDataLoader />
            <MvxDappContext>
              <AppInitGate>
                <ApplicationRouter />
              </AppInitGate>
            </MvxDappContext>
          </ReduxContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </MvxAxiosContext>
  );
}

export default App;
