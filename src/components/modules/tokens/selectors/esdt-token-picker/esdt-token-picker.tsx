import React from "react";

import { TokenPicker } from "../../index";
import { TokenPickerProps } from "../token-picker/token-picker";

import { EsdtToken, Token, useEsdtTokensListWithEgld } from "../../../../../modules/tokens";

type Props = Omit<TokenPickerProps, "tokens" | "onChange"> & {
  onChange: (value: EsdtToken | undefined) => void;
};

export default function EsdtTokenPicker(props: Props) {
  const { onChange, ...rest } = props;
  const esdtTokens = useEsdtTokensListWithEgld();

  const tokenChangeHandler = (value: Token | undefined) => {
    onChange(value as EsdtToken | undefined);
  };

  return (
    <React.Fragment>
      <TokenPicker {...rest} onChange={tokenChangeHandler} tokens={esdtTokens} />
    </React.Fragment>
  );
}
