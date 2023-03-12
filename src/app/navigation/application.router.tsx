import React, { useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Loader } from "../../components/themed";

import { RoutesConfig } from "./routes.config";
import { useScrollToTopHandler } from "./hooks/useScrollToTopHandler";
import { AuthRoutesOutlet, AuthenticatedRouteOutlet } from "./outlets";

/** Layouts **/
const AppLayout = React.lazy(() => import("../../components/layout/app"));

/** Auth Screens **/
const AuthScreen = React.lazy(() => import("../../screens/auth/auth.screen"));

/** App Screens **/
const HomeScreen = React.lazy(() => import("../../screens/app/home.screen/home.screen"));
const PingPongScreen = React.lazy(() => import("../../screens/app/ping-pong.screen"));
const StatisticsScreen = React.lazy(() => import("../../screens/app/statistics.screen"));

export function ApplicationRouter() {
  useScrollToTopHandler();
  const location = useLocation();
  const state = useMemo(() => location.state as { backgroundLocation?: Location }, [location]);

  return (
    <React.Suspense fallback={<Loader />}>
      <Routes location={state?.backgroundLocation || location}>
        <Route path={""} element={<AppLayout />}>
          <Route index element={<HomeScreen />} />

          <Route element={<AuthenticatedRouteOutlet />}>
            <Route path={RoutesConfig.pingPong} element={<PingPongScreen />} />
            <Route path={RoutesConfig.statistics} element={<StatisticsScreen />} />
          </Route>
        </Route>
      </Routes>

      <Routes>
        <Route path={RoutesConfig.auth}>
          <Route element={<AuthRoutesOutlet />}>
            <Route index element={<AuthScreen />} />
          </Route>
        </Route>
      </Routes>
    </React.Suspense>
  );
}
