import { useMemo } from "react";
import { useSelector } from "react-redux";

import { Egld, EsdtToken } from "../../models";
import { selectEsdtTokensList, selectEsdtTokensMap } from "../../redux";

export function useEsdtTokensList(): EsdtToken[] {
  return useSelector(selectEsdtTokensList);
}

export function useEsdtTokensMap() {
  return useSelector(selectEsdtTokensMap);
}

export function useEsdtTokensListWithEgld(): EsdtToken[] {
  const tokensList = useEsdtTokensList();
  return useMemo(() => [new Egld(), ...tokensList], [tokensList]);
}
