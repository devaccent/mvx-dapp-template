import { useEffect, useState } from "react";
import { ContractFunction } from "@multiversx/sdk-core/out";

import { pingPongContract } from "../../contract";
import { useSmartContractQueryHandler } from "../../../../libs/mvx";

export function useFetchPingAmount() {
  const queryHandler = useSmartContractQueryHandler();
  const [pingAmount, setPingAmount] = useState<string>();

  const getPingAmount = async () => {
    try {
      const endpointDefinition = pingPongContract.getEndpoint("getPingAmount");
      const query = pingPongContract.createQuery({
        func: new ContractFunction("getPingAmount"),
      });

      const { firstValue: amount } = await queryHandler(query, endpointDefinition);

      setPingAmount(amount?.valueOf()?.toString(10));
    } catch (err) {
      console.error("Unable to call getPingAmount", err);
    }
  };

  useEffect(() => {
    getPingAmount();
  }, []);

  return pingAmount;
}
