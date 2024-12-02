import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
} from "@mui/material";

interface AppBarProps extends MuiAppBarProps {}

export const AppBar = (props: AppBarProps) => {
  return <MuiAppBar {...props} />;
};
