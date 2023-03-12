import Token from "./token.model";
import { TokenType } from "../../../libs/mvx";

export default class EsdtToken extends Token {
  type = TokenType.FungibleESDT;

  owner!: string;

  canBurn!: boolean;
  canChangeOwner!: boolean;
  canFreeze!: boolean;
  canMint!: boolean;
  canPause!: boolean;
  canUpgrade!: boolean;
  canWipe!: boolean;

  circulatingSupply!: string;

  burnt!: string;

  isPaused!: boolean;

  constructor(params: Partial<EsdtToken> = {}) {
    super(params);
  }
}
