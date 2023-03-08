import React from "react";

import { BlockchainAccount } from "../../../../modules/account";

type Props = {
  account: BlockchainAccount;
};

export default function AccountBadge(props: Props) {
  const { account } = props;

  return <div>{account.username}</div>;
}
