import { useEffect, useMemo, useState } from "react";
import { useGetPendingTransactions } from "@multiversx/sdk-dapp/hooks";

import { PingPongActions, useFetchTimeToPong } from "../../../../modules/ping-pong";

function usePingPongNextAction(hasPing?: boolean) {
  return useMemo(() => (hasPing ? PingPongActions.Ping : PingPongActions.Pong), [hasPing]);
}

function useIsPingAllowed(nextAction: PingPongActions, hasPendingTransactions: boolean) {
  return useMemo(() => nextAction === PingPongActions.Ping && !hasPendingTransactions, [nextAction, hasPendingTransactions]);
}

function useIsPongAllowed(nextAction: PingPongActions, hasPendingTransactions: boolean, secondsLeft?: number) {
  return useMemo(
    () => nextAction === PingPongActions.Pong && secondsLeft === 0 && !hasPendingTransactions,
    [nextAction, hasPendingTransactions, secondsLeft]
  );
}

export function usePingPongStats(address: string) {
  const getTimeToPong = useFetchTimeToPong();
  const { hasPendingTransactions } = useGetPendingTransactions();

  const [hasPing, setHasPing] = useState<boolean>();
  const [secondsLeft, setSecondsLeft] = useState<number>();

  const nextAction = usePingPongNextAction(hasPing);
  const pingAllowed = useIsPingAllowed(nextAction, hasPendingTransactions);
  const pongAllowed = useIsPongAllowed(nextAction, hasPendingTransactions, secondsLeft);

  const counter = () => {
    if (secondsLeft) {
      const interval = setInterval(() => {
        setSecondsLeft((existing) => {
          if (existing) {
            return existing - 1;
          } else {
            clearInterval(interval);
            return 0;
          }
        });
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  };

  const setSecondsRemaining = async () => {
    const secondsRemaining = await getTimeToPong(address);

    switch (secondsRemaining) {
      case undefined:
      case null:
        setHasPing(true);
        break;
      case 0:
        setSecondsLeft(0);
        setHasPing(false);
        break;
      default:
        setSecondsLeft(secondsRemaining);
        setHasPing(false);
        break;
    }
  };

  useEffect(counter, [hasPing]);

  useEffect(() => {
    setSecondsRemaining();
  }, [hasPendingTransactions]);

  return { secondsLeft, nextAction, pingAllowed, pongAllowed };
}
