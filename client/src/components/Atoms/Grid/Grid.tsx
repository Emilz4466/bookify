import { Grid2 as MuiGrid, Grid2Props as MuiGridProps } from "@mui/material";

interface GridProps
  extends Pick<
    MuiGridProps,
    | "children"
    | "container"
    | "justifyContent"
    | "alignItems"
    | "flexGrow"
    | "size"
    | "offset"
    | "component"
    | "onSubmit"
    | "onReset"
    | "sx"
    | "flexWrap"
  > {}

export const Grid = (props: GridProps) => <MuiGrid p={1} {...props} />;

export type GridSize = MuiGridProps["size"];
