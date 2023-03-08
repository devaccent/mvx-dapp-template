import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";

import styles from "./styles.module.scss";
import { Card } from "../../../components/themed";
import { Overlay } from "../../../components/layout";
import { AuthForm } from "../../../components/modules/auth";

import { useLoginRedirectLocation } from "../../../modules/auth";

export default function AuthScreen() {
  const location = useLocation();
  const redirectLocation = useLoginRedirectLocation();

  const state = location.state as { backgroundLocation?: Location };
  const hasBackgroundLocation = useMemo(() => state && !!state.backgroundLocation, [state]);

  if (hasBackgroundLocation) {
    return (
      <Overlay>
        <Card shadow>
          <AuthForm callbackRoute={redirectLocation} />
        </Card>
      </Overlay>
    );
  }

  return (
    <div className={styles.container}>
      <Card shadow>
        <AuthForm callbackRoute={redirectLocation} hasCloseButton={false} />
      </Card>
    </div>
  );
}
