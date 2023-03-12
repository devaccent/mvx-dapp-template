import React from "react";

import styles from "./styles.module.scss";
import MenuItem, { TMenuItem } from "./components/menu-item";

const routes: TMenuItem[] = [
  { to: "/", text: "Home", icon: "dashboard" },
  { to: "/ping-pong", text: "Ping Pong", icon: "sports_tennis" },
  { to: "/statistics", text: "Statistics", icon: "insights" },
];

export default function AppMenu() {
  return (
    <div className={styles.container}>
      {routes.map((route, index) => (
        <div key={index}>
          <MenuItem route={route} />
        </div>
      ))}
    </div>
  );
}
