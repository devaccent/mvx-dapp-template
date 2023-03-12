import EsdtToken from "./esdt-token.model";
import { getEgldLabel } from "@multiversx/sdk-dapp/utils";
import { EGLD_TOKEN_IDENTIFIER } from "../../../libs/mvx";

import egldTokenLogo from "./../../../assets/tokens/egld-logo.svg";

export default class Egld extends EsdtToken {
  ticker = EGLD_TOKEN_IDENTIFIER;
  identifier = EGLD_TOKEN_IDENTIFIER;
  balance = "0";
  decimals = 18;

  constructor(params: Partial<Egld> = {}) {
    super(params);
    this.name = getEgldLabel();
    this.hasAssetImage = true;
    this.assetImageUrl = egldTokenLogo;
    this.description =
      "The eGold (EGLD) Token is the native token powering the MultiversX Network. Its utility comprises all core network functionalities, such as staking, governance, transactions, smart contracts, and validator rewards.";
  }
}
