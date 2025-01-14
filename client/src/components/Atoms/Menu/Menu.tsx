import { Menu as MuiMenu, MenuProps as MuiMenuProps } from "@mui/material";

interface MenuProps
  extends Pick<MuiMenuProps, "anchorEl" | "open" | "onClose" | "children"> {}

export const Menu = (props: MenuProps) => {
  return (
    <MuiMenu
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      {...props}
    />
  );
};
