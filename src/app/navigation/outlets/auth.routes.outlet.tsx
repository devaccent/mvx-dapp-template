import React, { useEffect } from "react";
import { useGetIsLoggedIn } from "@multiversx/sdk-dapp/hooks";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import { useLoginRedirectLocation } from "../../../modules/auth";

export function AuthRoutesOutlet() {
  const isLoggedIn = useGetIsLoggedIn();
  const navigate = useNavigate();
  const redirectLocation = useLoginRedirectLocation();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(redirectLocation);
    }
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return <Navigate to={redirectLocation} />;
  }

  return <Outlet />;
}
