import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { useGetTransactions } from "../../../../libs/mvx";
import AppEnvironment from "../../../../app/environment/app.environment";
import { setTransactions, setLoadingTransactions, setLoadingError } from "../../redux/ping-pong.slice";

export function useFetchPingPongTransactions() {
  const getTransactions = useGetTransactions();
  const dispatch = useDispatch();

  return useCallback((address: string) => {
    dispatch(setLoadingTransactions());

    return getTransactions(address, AppEnvironment.contracts.pingPong)
      .then((data) => dispatch(setTransactions(data)))
      .catch((error) => setLoadingError(error.message));
  }, []);
}
