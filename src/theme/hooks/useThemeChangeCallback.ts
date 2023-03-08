import { Theme } from "../enums";
import { useEffect } from "react";

export function useThemeChangeCallback(theme: Theme) {
  useEffect(() => {
    const html = window.document.getElementsByTagName("html")[0];

    if (theme === Theme.Light) {
      html.className = "light-theme";
    } else {
      html.className = "dark-theme";
    }
  }, [theme]);
}
