import React from "react";
import moment from "moment/moment";

import styles from "./styles.module.scss";

type Props = {
  secondsLeft?: number;
};

export default function PongTimer(props: Props) {
  const { secondsLeft = 0 } = props;

  const timeRemaining = moment()
    .startOf("day")
    .seconds(secondsLeft || 0)
    .format("mm:ss");

  if (secondsLeft === 0) {
    return null;
  }

  return <div className={styles.container}>{timeRemaining} until you are able to call Pong!</div>;
}
