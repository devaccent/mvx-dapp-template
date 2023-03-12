import React from "react";
import styles from "./styles.module.scss";

import { EsdtToken } from "../../../../modules/tokens";

type Props = {
  token: EsdtToken;
};

export default function TokenDetails(props: Props) {
  const { token } = props;

  return (
    <div className={styles.container}>
      <div>{token.description ?? "No description provided for this token"}</div>
    </div>
  );
}
