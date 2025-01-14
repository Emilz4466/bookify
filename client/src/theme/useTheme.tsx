import { useCallback, useMemo, useState } from "react";
import { ThemeContextData } from "./types";
import { createTheme, PaletteMode } from "@mui/material";
import { common, grey, lightBlue } from "@/components/Atoms";

export const useTheme = (): ThemeContextData => {
  const [mode, setMode] = useState<PaletteMode>("light");
  //TODO set fonts on darkmode
  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          allVariants: {
            color: mode === "dark" ? common["white"] : "#2B2B2B",
          },
        },
        palette: {
          mode: mode,
          primary: {
            main: mode === "dark" ? "#F2C879" : "#F2C879",
            light: mode === "dark" ? "#eeca8f" : "#eeca8f",
            dark: mode === "dark" ? "#af8b42" : "#af8b42",
          },
          secondary: {
            main: mode === "dark" ? lightBlue[400] : lightBlue[800],
            light: mode === "dark" ? lightBlue[300] : lightBlue[500],
            dark: mode === "dark" ? lightBlue[700] : lightBlue[900],
          },
          background: {
            default: mode === "dark" ? grey[600] : grey[100],
            paper: mode === "dark" ? grey[600] : grey[100],
          },
        },
      }),
    [mode],
  );

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  return {
    theme,
    mode,
    toggleColorMode,
  };
};
