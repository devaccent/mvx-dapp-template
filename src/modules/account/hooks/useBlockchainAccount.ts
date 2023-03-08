import { useMemo } from "react";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { BlockchainAccount } from "../models";

export function useBlockchainAccount() {
  const account = useGetAccount();

  return useMemo(() => new BlockchainAccount(account), [account]);
}
