import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import { Icon } from "../../../../../../themed";

export type TMenuItem = {
  to: string;
  text: string;
  icon: string;
};

type Props = {
  route: TMenuItem;
};

const isCurrentLocation = (currentPath: string) => window.location.pathname === currentPath;

export default function MenuItem(props: Props) {
  const { route } = props;
  const { text, icon, to } = route;

  return (
    <div>
      <Link to={to} className={styles.menuItem} data-active={isCurrentLocation(to)}>
        <Icon name={icon} className={styles.icon} />
        <div className={styles.itemText}>{text}</div>
      </Link>
    </div>
  );
}
