import React from "react";
import styles from "./styles.module.scss";

import { StatisticsType } from "../../../../modules/statistics";

type Props = {
  statistics: StatisticsType;
};

const formatter = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 2,
});

export default function EcosystemStats(props: Props) {
  const { statistics } = props;

  return (
    <div className={styles.container}>
      <div>
        The information below is fetched using <strong>nativeAuth</strong> Bearer token
      </div>

      <div className={styles.itemsList}>
        <div className={styles.item}>Current price: ${formatter.format(statistics.currentPrice)}</div>
        <div className={styles.item}>24h Volume: ${formatter.format(statistics.volume24h)}</div>
      </div>
    </div>
  );
}
