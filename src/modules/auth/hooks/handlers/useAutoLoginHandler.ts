import { useCallback } from "react";
import { getIsLoggedIn } from "@multiversx/sdk-dapp/utils";

import { useLoginHandler } from "./useLoginHandler";
import { useLogoutHandler } from "./useLogoutHandler";

export function useAutoLoginHandler() {
  const loginHandler = useLoginHandler();
  const logoutHandler = useLogoutHandler();

  return useCallback(async () => {
    const isLoggedIn = getIsLoggedIn();

    if (isLoggedIn) {
      return loginHandler();
    } else {
      return logoutHandler();
    }
  }, []);
}
