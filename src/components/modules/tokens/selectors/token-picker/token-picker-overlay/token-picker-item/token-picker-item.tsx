import React from "react";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";

import styles from "./token-picker-item.module.scss";

import { Icon } from "../../../../../../themed";
import TokenImage from "../../../../token-image";
import { Token } from "../../../../../../../modules/tokens";

type Props = {
  token: Token;
  isSelected: boolean;
  showBalance?: boolean;
  onClick: (token: Token) => void;
};

export default function TokenPickerItem(props: Props) {
  const { token, isSelected, showBalance, onClick } = props;

  return (
    <div data-is-selected={isSelected} className={styles.container} onClick={() => onClick(token)}>
      <TokenImage token={token} />
      <div className={styles.content}>
        <div className={styles.nameContainer}>
          <div>{token.name}</div>
          {token.verified && <Icon name={"circle-check"} />}
        </div>
        <div className={styles.rightContainer}>
          <div>{token.identifier}</div>
          {showBalance && <FormatAmount value={token.balance} token={token.ticker} decimals={token.decimals} />}
        </div>
      </div>
    </div>
  );
}
