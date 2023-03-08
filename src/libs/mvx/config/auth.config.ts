import { AppEnvironment } from "../../../app/environment";

export const defaultAuthButtonConfig = {
  nativeAuth: true,
};

export const defaultWalletConnectButtonConfig = {
  ...defaultAuthButtonConfig,
  isWalletConnectV2: AppEnvironment.walletConnect.projectId !== undefined,
};
