import { Theme } from "../enums";
import { useMemo } from "react";

export function useDeviceThemeChoice() {
  return useMemo(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return Theme.Dark;
    }

    return Theme.Light;
  }, []);
}
