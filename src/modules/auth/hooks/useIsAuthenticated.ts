import { useGetIsLoggedIn } from "@multiversx/sdk-dapp/hooks";

export default function useIsAuthenticated() {
  return useGetIsLoggedIn();
}
