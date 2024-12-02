import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from "@mui/material";

interface TooltipProps
  extends Pick<MuiTooltipProps, "placement" | "title" | "children"> {}

export const Tooltip = (props: TooltipProps) => {
  return <MuiTooltip aria-haspopup={true} {...props} />;
};
