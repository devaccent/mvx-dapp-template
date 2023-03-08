import { ProxyNetworkProvider } from "@multiversx/sdk-network-providers/out";
import { EndpointDefinition, ResultsParser } from "@multiversx/sdk-core/out";
import { IContractQuery } from "@multiversx/sdk-network-providers/out/interface";
import { useGetNetworkConfig } from "@multiversx/sdk-dapp/hooks/useGetNetworkConfig";

const resultsParser = new ResultsParser();

export function useSmartContractQueryHandler() {
  const { network } = useGetNetworkConfig();
  const proxy = new ProxyNetworkProvider(network.apiAddress);

  return async (query: IContractQuery, endpointDefinition: EndpointDefinition) => {
    const queryResponse = await proxy.queryContract(query);
    return resultsParser.parseQueryResponse(queryResponse, endpointDefinition);
  };
}
