import type { ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import { theme } from "./theme";

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
