import { EsdtEnumType, NftEnumType } from "@multiversx/sdk-dapp/types/tokens.types";

export enum TokenType {
  FungibleESDT = EsdtEnumType.FungibleESDT,
  MetaESDT = NftEnumType.MetaESDT,
  NonFungibleESDT = NftEnumType.NonFungibleESDT,
  SemiFungibleESDT = NftEnumType.SemiFungibleESDT,
}
