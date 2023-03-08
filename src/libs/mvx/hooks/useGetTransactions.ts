import { getTransactions } from "@multiversx/sdk-dapp/apiCalls";
import { useGetNetworkConfig } from "@multiversx/sdk-dapp/hooks";

import { AppEnvironment } from "../../../app/environment";

export default function useGetTransactions() {
  const {
    network: { apiAddress },
  } = useGetNetworkConfig();

  return async (sender: string, receiver: string) => {
    const params = {
      apiAddress,
      sender: sender,
      receiver: receiver,
      condition: "must" as const,
      apiTimeout: AppEnvironment.mvx.apiTimeout,
      transactionSize: AppEnvironment.mvx.transactionSize,
    };

    return getTransactions(params).then((response) => response.data);
  };
}
