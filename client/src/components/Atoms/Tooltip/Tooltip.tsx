import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from "@mui/material";

interface TooltipProps
  extends Pick<MuiTooltipProps, "placement" | "title" | "children"> {}

export const Tooltip = (props: TooltipProps) => {
  const { children, ...rest } = props;
  return (
    <MuiTooltip arrow aria-haspopup={true} {...rest}>
      <span>{children}</span>
    </MuiTooltip>
  );
};
