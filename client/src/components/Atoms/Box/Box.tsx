import { Box as MuiBox, BoxProps as MuiBoxProps } from "@mui/material";

interface BoxProps
  extends Pick<
    MuiBoxProps,
    | "children"
    | "onSubmit"
    | "flexGrow"
    | "flexDirection"
    | "justifyContent"
    | "display"
    | "sx"
    | "onReset"
  > {}

export const Box = (props: BoxProps) => <MuiBox {...props} />;
