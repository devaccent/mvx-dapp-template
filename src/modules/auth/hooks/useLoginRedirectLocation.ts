import { useMemo } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import { RoutesConfig } from "../../../app/navigation";

export default function useLoginRedirectLocation() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  const state = location.state as { backgroundLocation?: Location };

  return useMemo(() => {
    if (redirectTo) {
      return redirectTo;
    }

    if (state && state.backgroundLocation) {
      return state.backgroundLocation.pathname;
    }

    return RoutesConfig.getDefaultLoginRoute();
  }, [redirectTo, state]);
}
