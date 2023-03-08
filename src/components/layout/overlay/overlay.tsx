import React, { PropsWithChildren } from "react";

import styles from "./styles.module.scss";

export default function Overlay(props: PropsWithChildren) {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
}
