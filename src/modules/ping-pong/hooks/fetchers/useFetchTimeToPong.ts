import { Address, AddressValue, ContractFunction } from "@multiversx/sdk-core/out";

import { pingPongContract } from "../../contract";
import { useSmartContractQueryHandler } from "../../../../libs/mvx";

export function useFetchTimeToPong() {
  const queryHandler = useSmartContractQueryHandler();

  return async (address: string) => {
    try {
      const query = pingPongContract.createQuery({
        func: new ContractFunction("getTimeToPong"),
        args: [new AddressValue(new Address(address))],
      });

      const endpointDefinition = pingPongContract.getEndpoint("getTimeToPong");
      const { firstValue } = await queryHandler(query, endpointDefinition);

      const secondsRemaining: number = firstValue?.valueOf()?.toNumber();

      return secondsRemaining;
    } catch (err) {
      console.error("Unable to call getTimeToPong", err);
    }
  };
}
