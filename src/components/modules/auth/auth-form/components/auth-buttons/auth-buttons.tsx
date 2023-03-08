import React from "react";
import { useExtensionLogin, useWebWalletLogin } from "@multiversx/sdk-dapp/hooks";

import styles from "./styles.module.scss";

import { Icon } from "../../../../../themed";
import { defaultAuthButtonConfig, AuthFlowStep } from "../../../../../../libs/mvx";

type Props = {
  callbackRoute: string;
  onButtonPress: (type: AuthFlowStep) => void;
};

export default function AuthButtons(props: Props) {
  const { onButtonPress, callbackRoute } = props;

  const [initiateWebWalletLogin] = useWebWalletLogin({
    callbackRoute: callbackRoute,
    ...defaultAuthButtonConfig,
  });

  const [initiateExtensionLogin] = useExtensionLogin({
    callbackRoute: callbackRoute,
    ...defaultAuthButtonConfig,
  });

  return (
    <>
      <div className={styles.button} onClick={() => onButtonPress(AuthFlowStep.WalletConnect)}>
        <div>xPortal (Maiar App)</div>
        <Icon name={"arrow_forward"}></Icon>
      </div>

      <div className={styles.button} onClick={initiateExtensionLogin}>
        <div>MultiversX DeFi Wallet</div>
        <Icon name={"arrow_forward"}></Icon>
      </div>

      <div className={styles.button} onClick={initiateWebWalletLogin}>
        <div>Web Wallet</div>
        <Icon name={"arrow_forward"}></Icon>
      </div>

      <div className={styles.button} onClick={() => onButtonPress(AuthFlowStep.LedgerConnect)}>
        <div>Ledger</div>
        <Icon name={"arrow_forward"}></Icon>
      </div>
    </>
  );
}
