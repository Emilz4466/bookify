import { Box, Grid, GridSize, Paper } from "@/components/Atoms";

interface ElementContainerProps {
  children: React.ReactNode;
  size?: GridSize;
  pt?: boolean;
  pr?: boolean;
  pb?: boolean;
  pl?: boolean;
}

export const ElementContainer = (props: ElementContainerProps) => {
  const { children, size, pr, pt, pl, pb } = props;
  const gridSx = {
    p: 0,
    pt: pt ? 2 : 0,
    pr: pr ? 2 : 0,
    pb: pb ? 2 : 0,
    pl: pl ? 2 : 0,
  };

  return (
    <Grid size={size} sx={gridSx}>
      <Paper>
        <Box>{children}</Box>
      </Paper>
    </Grid>
  );
};
