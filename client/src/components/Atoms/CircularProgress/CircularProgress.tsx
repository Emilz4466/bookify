import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from "@mui/material";

interface CircularProgressProps
  extends Pick<MuiCircularProgressProps, "size"> {}

export const CircularProgress = (props: CircularProgressProps) => {
  const { size } = props;

  return <MuiCircularProgress color="inherit" size={size} />;
};
