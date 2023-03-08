import React, { useMemo } from "react";
import { AuthFlowStep } from "../../../../../libs/mvx";

import { AuthButtons, LedgerConnectFlow, WalletConnectFlow } from "../components";

export default function useFlowComponent(step: AuthFlowStep, setStep: (step: AuthFlowStep) => void, callbackRoute: string) {
  return useMemo(() => {
    switch (step) {
      case AuthFlowStep.WalletConnect:
        return <WalletConnectFlow logoutRoute={callbackRoute} />;
      case AuthFlowStep.LedgerConnect:
        return <LedgerConnectFlow />;
      default:
        return <AuthButtons onButtonPress={setStep} callbackRoute={callbackRoute} />;
    }
  }, [step]);
}
