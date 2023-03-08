import { Theme } from "../enums";

export function useLocalStorageThemeChoice() {
  return window.localStorage.getItem("prefers-color-scheme") as Theme | null;
}
