import { EsdtTokensList, EsdtTokensMap } from "../types";
import { RootState } from "../../../app/redux/root-reducer";

export function selectEsdtTokensList(state: RootState): EsdtTokensList {
  return state.tokensData.esdtTokensList;
}

export function selectEsdtTokensMap(state: RootState): EsdtTokensMap {
  return state.tokensData.esdtTokensMap;
}
