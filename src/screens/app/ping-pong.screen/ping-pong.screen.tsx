import React, { useMemo, useState } from "react";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";
import { useGetPendingTransactions } from "@multiversx/sdk-dapp/hooks";

import styles from "./styles.module.scss";
import { Card, Button } from "../../../components/themed";
import { PongTimer, PingPongTransactions } from "../../../components/modules/ping-pong";

import {
  PingPongActions,
  pingTransaction,
  pongTransaction,
  usePingPongState,
  useFetchPingAmount,
  usePingPongTransactionsListener,
} from "../../../modules/ping-pong";
import { useBlockchainAccount } from "../../../modules/account";

import { usePingPongStats } from "./hooks/usePingPongStats";

export default function PingPongScreen() {
  const pingAmount = useFetchPingAmount();
  const account = useBlockchainAccount();
  const { hasPendingTransactions } = useGetPendingTransactions();
  const [, setTransactionSessionId] = useState<string | null>(null);

  const { transactions, status, errorMessage } = usePingPongState();
  const { secondsLeft, pingAllowed, pongAllowed, nextAction } = usePingPongStats(account.address);

  const isButtonDisabled = useMemo(() => !pingAllowed && !pongAllowed, [pingAllowed, pongAllowed]);
  const shouldShowPongTimer = useMemo(
    () => nextAction === PingPongActions.Pong && !hasPendingTransactions,
    [nextAction, hasPendingTransactions, secondsLeft]
  );

  usePingPongTransactionsListener(account.address);

  const pingPongCallback = () => {
    const callback = (sessionId: string | null) => {
      if (sessionId) {
        setTransactionSessionId(sessionId);
      }
    };

    switch (true) {
      case pongAllowed:
        pongTransaction().then(callback);
        break;
      case pingAllowed && pingAmount !== undefined:
        pingTransaction(pingAmount as string).then(callback);
        break;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Card>
          <div>
            <h1>
              <FormatAmount value={account.balance} />
            </h1>
            <div className={styles.instructions}>
              <em>
                A simple game that allows anyone to send a fixed amount to the smart contract, locks it for a while and then allows users to
                take it back.
              </em>
              <em>Sending funds to the contract is called `ping`. Taking the same funds back is called `pong`.</em>
            </div>
          </div>

          {shouldShowPongTimer && <PongTimer secondsLeft={secondsLeft} />}

          <Button
            color={"primary"}
            mode={"outlined"}
            onClick={pingPongCallback}
            disabled={isButtonDisabled}
            loading={hasPendingTransactions}
          >
            Perform <b>{nextAction === PingPongActions.Ping ? "Ping" : "Pong"}</b> Action
          </Button>
        </Card>

        <Card shadow>
          <PingPongTransactions transactions={transactions} status={status} error={errorMessage} />
        </Card>
      </div>
    </div>
  );
}
