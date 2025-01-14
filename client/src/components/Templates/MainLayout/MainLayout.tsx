import { Box, CssBaseline, Grid } from "@/components/Atoms";
import { Topbar } from "@/components/Organisms";
import { useTheme } from "@/theme/useTheme";

interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  const { theme } = useTheme();

  return (
    <Grid container size={{ xs: 12, md: 8 }} sx={{ p: 0 }}>
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          height: "140px",
          backgroundColor: theme.palette.background.default,
          position: "fixed",
          left: 0,
        }}
      ></Box>
      <Topbar />
      <Grid size={12} sx={{ pl: 0, pr: 0, pt: 2, pb: 2 }}>
        {children}
      </Grid>
    </Grid>
  );
};
