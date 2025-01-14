import { Paper as MuiPaper, PaperProps as MuiPaperProps } from "@mui/material";

interface PaperProps extends MuiPaperProps {}

export const Paper = (props: PaperProps) => {
  return (
    <MuiPaper
      elevation={2}
      sx={{
        borderRadius: 0,
        ...props.sx,
      }}
      {...props}
    />
  );
};
