import React from "react";
import styles from "./styles.module.scss";

export default function WalletSetupInfo() {
  return (
    <div className={styles.container}>
      <div>New to MultiversX?</div>
      <a className={styles.link} href={"https://wallet.multiversx.com/create"}>
        Learn how to setup a wallet
      </a>
    </div>
  );
}
