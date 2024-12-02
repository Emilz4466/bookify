import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";

type TypographyProps<C extends React.ElementType> = MuiTypographyProps<
  C,
  { component?: C }
>;

export const Typography = (props: TypographyProps<React.ElementType>) => (
  <MuiTypography {...props} />
);
