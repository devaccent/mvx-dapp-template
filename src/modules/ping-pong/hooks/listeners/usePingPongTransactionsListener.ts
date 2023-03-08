import { useEffect } from "react";
import { useGetActiveTransactionsStatus } from "@multiversx/sdk-dapp/hooks";
import { useFetchPingPongTransactions } from "../fetchers/useFetchPingPongTransactions";

export function usePingPongTransactionsListener(address: string) {
  const fetchTransactions = useFetchPingPongTransactions();
  const { success, fail } = useGetActiveTransactionsStatus();

  useEffect(() => {
    if (success || fail || address) {
      fetchTransactions(address);
    }
  }, [success, fail, address]);
}
