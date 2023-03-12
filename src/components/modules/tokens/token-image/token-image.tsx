import React from "react";
import { Token } from "../../../../modules/tokens";

type Props = {
  token: Token;
  size?: number;
};

export default function TokenImage(props: Props) {
  const { token, size = 32 } = props;

  if (!token.hasAssetImage) {
    return null;
  }

  return <img width={size} height={size} loading={"lazy"} src={token.assetImageUrl} />;
}
