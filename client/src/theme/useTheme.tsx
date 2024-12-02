import { useCallback, useMemo, useState } from "react";
import { ThemeContextData } from "./types";
import { createTheme, PaletteMode } from "@mui/material";
import { brown, common, grey, lightBlue } from "@/components/Atoms";

export const useTheme = (): ThemeContextData => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          allVariants: {
            color: mode === "dark" ? common["white"] : grey[800],
          },
        },
        palette: {
          mode: mode,
          primary: {
            main: mode === "dark" ? brown[400] : brown[800],
            light: mode === "dark" ? brown[300] : brown[500],
            dark: mode === "dark" ? brown[700] : brown[900],
          },
          secondary: {
            main: mode === "dark" ? lightBlue[400] : lightBlue[800],
            light: mode === "dark" ? lightBlue[300] : lightBlue[500],
            dark: mode === "dark" ? lightBlue[700] : lightBlue[900],
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
