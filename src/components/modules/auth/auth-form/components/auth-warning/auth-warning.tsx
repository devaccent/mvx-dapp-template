import React from "react";
import styles from "./styles.module.scss";

import { Icon } from "../../../../../themed";
import { AppEnvironment } from "../../../../../../app/environment";

export default function AuthWarning() {
  return (
    <div className={styles.container}>
      <div>Beware of scams and phishing attempts!</div>
      <div>
        <div>Check the website link carefully:</div>
        <div className={styles.linkContainer}>
          <Icon name={"lock"} />
          {AppEnvironment.appUrl}
        </div>
      </div>
    </div>
  );
}
