import { TokenType } from "../../../libs/mvx";

type TokenAssets = {
  description?: string;
  website?: string;
  svgUrl?: string;
  pngUrl?: string;
};

type TokenSocial = {
  coingecko?: string;
  coinmarketcap?: string;
  discord?: string;
  email?: string;
  telegram?: string;
  twitter?: string;
};

export default class Token {
  type!: TokenType;

  name = "";
  identifier = "";
  ticker!: string;
  decimals!: number;

  balance!: string;
  verified = false;

  description: string | undefined = undefined;

  assets: TokenAssets = {};

  social: TokenSocial = {};

  isEsdt: boolean;
  isMetaEsdt: boolean;
  isSemiFungible: boolean;
  isNonFungible: boolean;

  hasAssetImage: boolean;

  assetImageUrl?: string;

  marketCap!: number;
  price!: number;

  constructor(params: Partial<Token> = {}) {
    Object.assign(this, params);

    this.hasAssetImage = this.assets.pngUrl !== undefined || this.assets.svgUrl !== undefined;

    this.isEsdt = this.type === TokenType.FungibleESDT;
    this.isMetaEsdt = this.type === TokenType.MetaESDT;
    this.isSemiFungible = this.type === TokenType.SemiFungibleESDT;
    this.isNonFungible = this.type === TokenType.NonFungibleESDT;

    this.description = this.assets.description ?? undefined;
    this.assetImageUrl = this.assets.svgUrl ?? this.assets.pngUrl;
  }
}
