import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from "@mui/material";

interface IconButtonProps
  extends Pick<MuiIconButtonProps, "onClick" | "children" | "sx" | "size"> {}

export const IconButton = (props: IconButtonProps) => {
  return <MuiIconButton disableRipple={false} {...props} />;
};
