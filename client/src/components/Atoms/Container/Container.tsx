import {
  Container as MuiContainer,
  ContainerProps as MuiContainerProps,
} from "@mui/material";

interface ContainerProps
  extends Pick<MuiContainerProps, "children" | "fixed" | "maxWidth" | "sx"> {}

export const Container = (props: ContainerProps) => (
  <MuiContainer disableGutters {...props} />
);
