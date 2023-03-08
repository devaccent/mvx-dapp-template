import React, { createContext, PropsWithChildren, useCallback, useEffect, useState } from "react";

import { Theme } from "../enums";
import { useDeviceThemeChoice, useLocalStorageThemeChoice, useThemeChangeCallback } from "../hooks";

export const ThemeContext = createContext({
  switchTheme: () => {},
});

export function ThemeProvider(props: PropsWithChildren) {
  const { children } = props;
  const [theme, setTheme] = useState(Theme.Dark);

  useThemeChangeCallback(theme);
  const deviceThemeChoice = useDeviceThemeChoice();
  const localStorageThemeChoice = useLocalStorageThemeChoice();

  useEffect(() => {
    if (localStorageThemeChoice) {
      setTheme(localStorageThemeChoice);
    } else {
      setTheme(deviceThemeChoice);
    }
  }, []);

  useEffect(() => {
    const callback = (event: { matches: boolean }) => {
      setTheme(event.matches ? Theme.Dark : Theme.Light);
    };

    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

    if (matchMedia) {
      matchMedia.addEventListener("change", callback);
    }

    return () => matchMedia.removeEventListener("change", callback);
  }, [setTheme]);

  const switchTheme = useCallback(() => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    window.localStorage.setItem("prefers-color-scheme", newTheme);
    setTheme(newTheme);
  }, [setTheme, theme]);

  return <ThemeContext.Provider value={{ switchTheme }}>{children}</ThemeContext.Provider>;
}
