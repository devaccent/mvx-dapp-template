import { useDispatch } from "react-redux";
import { logout } from "@multiversx/sdk-dapp/utils";

import { accountLogoutAction } from "../../../../app/redux";

export function useLogoutHandler() {
  const dispatch = useDispatch();

  return () => {
    logout().then(() => dispatch(accountLogoutAction));
  };
}
