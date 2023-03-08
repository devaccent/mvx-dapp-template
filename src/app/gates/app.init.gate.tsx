import React, { PropsWithChildren, useEffect, useState } from "react";

import { Loader } from "../../components/themed";

import { useAutoLoginHandler } from "../../modules/auth";

export function AppInitGate(props: PropsWithChildren) {
  const { children } = props;
  const autoLoginHandler = useAutoLoginHandler();
  const [finishedAutoLoginFlow, setFinishedAutoLoginFlow] = useState(false);

  useEffect(() => {
    autoLoginHandler().finally(() => setFinishedAutoLoginFlow(true));
  }, []);

  if (!finishedAutoLoginFlow) {
    return <Loader />;
  }

  return <React.Fragment>{children}</React.Fragment>;
}
