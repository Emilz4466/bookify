import { CssBaseline, Grid } from "@/components/Atoms";
import { Topbar } from "@/components/Organisms";

interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;

  return (
    <Grid container size={{ xs: 12, md: 8 }} sx={{ p: 0 }}>
      <CssBaseline />
      <Topbar />
      <Grid size={12}>{children}</Grid>
    </Grid>
  );
};
