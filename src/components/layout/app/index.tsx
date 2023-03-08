import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Loader } from "../../themed";

import { Header } from "./components";
import styles from "./styles.module.scss";

export default function AppLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <div className={styles.pageContent}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
