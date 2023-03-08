import React from "react";
import { LedgerLoginButton } from "@multiversx/sdk-dapp/UI";

import { defaultAuthButtonConfig } from "../../../../../../libs/mvx";

export default function LedgerFlow() {
  return <LedgerLoginButton wrapContentInsideModal={false} {...defaultAuthButtonConfig} />;
}
