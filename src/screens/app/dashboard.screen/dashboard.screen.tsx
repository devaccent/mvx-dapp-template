import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

import { Card, Icon } from "../../../components/themed";
import { RoutesConfig } from "../../../app/navigation";

export default function DashboardScreen() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Card className={styles.card} onClick={() => navigate(RoutesConfig.pingPong)}>
          <div className={styles.cardContent}>
            <h4>PING PONG</h4>
            <div>Play a game of blockchain ping-pong</div>
          </div>
          <Icon className={styles.icon} name={"sports_tennis"} />
        </Card>
        <Card className={styles.card} onClick={() => navigate(RoutesConfig.statistics)}>
          <div className={styles.cardContent}>
            <h4>STATISTICS</h4>
            <div>Play a game of blockchain ping-pong</div>
          </div>
          <Icon className={styles.icon} name={"insights"} />
        </Card>
      </div>
    </div>
  );
}
