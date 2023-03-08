import React from "react";
import { WalletConnectLoginContainer } from "@multiversx/sdk-dapp/UI";

import { defaultWalletConnectButtonConfig } from "../../../../../../libs/mvx";

type Props = {
  logoutRoute: string;
};

export default function WalletConnectFlow(props: Props) {
  const { logoutRoute } = props;

  return (
    <WalletConnectLoginContainer
      title={""}
      logoutRoute={logoutRoute}
      wrapContentInsideModal={false}
      loginButtonText="xPortal Login"
      lead="Scan the QR code using xPortal"
      {...defaultWalletConnectButtonConfig}
    />
  );
}
