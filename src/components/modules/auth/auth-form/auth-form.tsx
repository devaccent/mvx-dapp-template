import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.override.scss";
import styles from "./styles.module.scss";

import { AuthFlowStep } from "../../../../libs/mvx";

import { AuthWarning, FormHeader, WalletSetupInfo } from "./components";
import useFlowComponent from "./hooks/useFlowComponent";

type Props = {
  callbackRoute: string;
  hasCloseButton?: boolean;
};

export default function AuthForm(props: Props) {
  const { callbackRoute, hasCloseButton = true } = props;

  const navigate = useNavigate();
  const [flowStep, setFlowStep] = useState(AuthFlowStep.Initial);
  const FlowComponent = useFlowComponent(flowStep, setFlowStep, callbackRoute);

  return (
    <div className={styles.container}>
      <FormHeader
        showCloseButton={hasCloseButton}
        showBackButton={flowStep !== AuthFlowStep.Initial}
        closeButtonHandler={() => navigate(-1)}
        goBackButtonHandler={() => setFlowStep(AuthFlowStep.Initial)}
      />

      {flowStep === AuthFlowStep.Initial && <AuthWarning />}

      <div className={styles.content} data-custom-content={flowStep !== AuthFlowStep.Initial}>
        {FlowComponent}
      </div>

      {flowStep === AuthFlowStep.Initial && <WalletSetupInfo />}
    </div>
  );
}
