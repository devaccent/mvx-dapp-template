import { EnvironmentEnum } from "../enums";

export type EnvironmentType = {
  type: EnvironmentEnum;

  appUrl: string;

  isMainnet: boolean;
  isTestnet: boolean;
  isDevnet: boolean;

  walletConnect: {
    projectId: string;
  };
  mvx: {
    apiTimeout: number;
    transactionSize: number;
    apiUrl: string;
    toolsApiUrl: string;
    nativeAuthDomains: string[];
  };
  contracts: {
    pingPong: string;
  };
};
