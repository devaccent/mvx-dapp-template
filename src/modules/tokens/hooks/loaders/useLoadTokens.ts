import { useDispatch } from "react-redux";

import { setEsdtTokens } from "../../redux";
import { TokensService } from "../../services";

export function useLoadTokens() {
  const dispatch = useDispatch();
  return () => TokensService.getEsdtTokens().then((tokens) => dispatch(setEsdtTokens(tokens)));
}
