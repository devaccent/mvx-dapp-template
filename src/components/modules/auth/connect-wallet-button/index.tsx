import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "../../../themed";
import { ButtonProps } from "../../../themed/buttons/button/button";
import { RoutesConfig } from "../../../../app/navigation";

export default function ConnectWalletButton(props: ButtonProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate(RoutesConfig.auth, {
      state: {
        backgroundLocation: location,
      },
    });
  };

  return (
    <Button onClick={buttonClickHandler} color={"primary"} {...props}>
      Connect
    </Button>
  );
}
