import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

import { Card, Icon } from "../../../components/themed";
import { EsdtTokenPicker, TokenDetails } from "../../../components/modules/tokens";

import { EsdtToken } from "../../../modules/tokens";
import { RoutesConfig } from "../../../app/navigation";

export default function HomeScreen() {
  const navigate = useNavigate();
  const [token, setToken] = useState<EsdtToken>();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Card>
          <div className={styles.cardContent}>
            <h4>EXPLORE ECOSYSTEM</h4>
            <div>Explore the tokens created on MultiversX</div>
          </div>
          <EsdtTokenPicker value={token} placeholder={"Select a token"} onChange={setToken} />

          {token && <TokenDetails token={token} />}
        </Card>

        <div className={styles.sideBySideCards}>
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
              <div>See the ecosystem statistics</div>
            </div>
            <Icon className={styles.icon} name={"insights"} />
          </Card>
        </div>
      </div>
    </div>
  );
}
