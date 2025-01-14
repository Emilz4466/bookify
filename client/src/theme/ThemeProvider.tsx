import { ThemeProvider } from "@mui/material";
import { createContext, useContext } from "react";
import { ThemeContextData } from "./types";
import { useTheme } from "./useTheme";

const ThemeContext = createContext<ThemeContextData | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeContext is undefined");
  }

  return context;
};

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const themeData = useTheme();
  return (
    <ThemeContext.Provider value={themeData}>
      <ThemeProvider theme={themeData.theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
