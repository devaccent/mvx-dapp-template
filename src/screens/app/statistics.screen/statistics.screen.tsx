import React from "react";
import styles from "./styles.module.scss";

import { Card, Loader } from "../../../components/themed";
import { EcosystemStats } from "../../../components/modules/statistics";

import { StatisticsType, useFetchStatistics } from "../../../modules/statistics";

export default function StatisticsScreen() {
  const { status, statistics } = useFetchStatistics();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Card shadow>
          {status === "loading" && <Loader inline />}
          {status === "loaded" && <EcosystemStats statistics={statistics as StatisticsType} />}
        </Card>
      </div>
    </div>
  );
}
