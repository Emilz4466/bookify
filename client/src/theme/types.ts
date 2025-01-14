import { PaletteMode, Theme } from "@mui/material";

export interface ThemeContextData extends ThemeState {
  toggleColorMode: () => void;
}

export interface ThemeState {
  theme: Theme;
  mode: PaletteMode;
}
