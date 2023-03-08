import React from "react";

import styles from "./styles.module.scss";

type Props = {
  size?: "tiny";
  inline?: boolean;
};

export default function DefaultLoader(props: Props) {
  const { inline, size } = props;

  return (
    <div data-inline={inline} data-size={size} className={styles.container}>
      <div className={styles.ripple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
