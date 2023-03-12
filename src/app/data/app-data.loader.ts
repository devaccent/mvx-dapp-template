import { useEffect } from "react";

import { useInterval } from "../helpers";
import { useLoadTokens } from "../../modules/tokens";

const ONE_MINUTE = 60 * 1000;

export default function AppDataLoader() {
  const loadTokens = useLoadTokens();

  useEffect(() => {
    loadTokens();
  }, []);

  useInterval(() => loadTokens, ONE_MINUTE * 10);

  return null;
}
