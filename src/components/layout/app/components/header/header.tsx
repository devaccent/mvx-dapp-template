import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import { Icon, AppLogo } from "../../../../themed";
import { AccountBadge } from "../../../../modules/account";
import { ConnectWalletButton } from "../../../../modules/auth";

import { RoutesConfig } from "../../../../../app/navigation";
import { useBlockchainAccount } from "../../../../../modules/account";
import { useIsAuthenticated, useLogoutHandler } from "../../../../../modules/auth";

import AppMenu from "../app-menu";

export default function Header() {
  const logoutHandler = useLogoutHandler();
  const isAuthenticated = useIsAuthenticated();
  const account = useBlockchainAccount();

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <Link to={RoutesConfig.home}>
          <AppLogo />
        </Link>

        <AppMenu />

        <div className={styles.leftContainer}>
          {!isAuthenticated && <ConnectWalletButton iconLeftProps={{ name: "bolt" }} />}

          {isAuthenticated && (
            <div className={styles.authenticatedElementsWrapper}>
              <AccountBadge account={account} />
              <Link to={""} className={`${styles.menuItem} ${styles.logoutLink}`} onClick={logoutHandler}>
                <Icon className={styles.icon} name={"logout"} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
