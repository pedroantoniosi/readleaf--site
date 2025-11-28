// src/hooks/useTheme.ts
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside <ThemeProvider>");
  }

  return context;
}
