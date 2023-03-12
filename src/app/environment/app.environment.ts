import _ from "lodash";

import * as commonVariables from "./env/common.json";
import * as devnetVariables from "./env/devnet.json";
import * as testnetVariables from "./env/testnet.json";
import * as mainnetVariables from "./env/mainnet.json";

import { EnvironmentEnum } from "./enums";
import { EnvironmentType } from "./types";

const environmentName = import.meta.env.VITE_APP_ENVIRONMENT || EnvironmentEnum.Devnet;

let environment: EnvironmentType;

const computedVariables: Partial<EnvironmentType> = {
  isDevnet: environmentName === EnvironmentEnum.Devnet,
  isTestnet: environmentName === EnvironmentEnum.Testnet,
  isMainnet: environmentName === EnvironmentEnum.Mainnet,
};

switch (environmentName) {
  case EnvironmentEnum.Testnet:
    environment = _.merge(computedVariables, commonVariables, testnetVariables) as EnvironmentType;
    break;
  case EnvironmentEnum.Mainnet:
    environment = _.merge(computedVariables, commonVariables, mainnetVariables) as EnvironmentType;
    break;
  case EnvironmentEnum.Devnet:
  default:
    environment = _.merge(computedVariables, commonVariables, devnetVariables) as EnvironmentType;
    break;
}

export default environment;
