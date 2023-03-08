import React from "react";
import type { ServerTransactionType } from "@multiversx/sdk-dapp/types";

import styles from "./styles.module.scss";
import { Loader } from "../../../themed";
import { TransactionsTable } from "../../transactions";

import { DataStatus } from "../../../../app/enums";

type Props = {
  status: DataStatus;
  error: string | undefined;
  transactions: ServerTransactionType[];
};

export default function PingPongTransactions(props: Props) {
  const { transactions, error, status } = props;

  if (status === DataStatus.Loading) {
    return <Loader inline />;
  }

  if (error) {
    return <>{error}</>;
  }

  if (transactions.length === 0) {
    return <>You don&apos;t have transactions yet.</>;
  }

  return (
    <>
      <div className={styles.header}>
        <h3>Your transactions</h3>
        {status === DataStatus.Reloading && <Loader inline size={"tiny"} />}
      </div>
      <TransactionsTable transactions={transactions} />
    </>
  );
}
