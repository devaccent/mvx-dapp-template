import React from "react";

import styles from "./styles.module.scss";
import logo from "../../../assets/branding/app.logo.svg";

type Props = {
  size?: number;
};

export default function AppLogo(props: Props) {
  const { size } = props;

  return <img data-size={size} className={styles.logo} src={logo} alt={"App logo"} />;
}
