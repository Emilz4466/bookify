import { AppBar, Box, Grid } from "@/components/Atoms";
import {
  Logo,
  ProfileLogin,
  Settings,
  TopbarSearchField,
} from "@/components/Molecules";

export const Topbar = () => {
  return (
    <AppBar
      position={"sticky"}
      color="default"
      elevation={2}
      sx={{ mt: 2, mb: 0, top: "16px" }}
    >
      <Grid size={12} container>
        <Grid
          size={3}
          container
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Logo type={"titleLogo"} width={190} />
        </Grid>
        <Grid size={7} container>
          <Box sx={{ width: "100%" }}>
            <TopbarSearchField />
          </Box>
        </Grid>
        <Grid
          size={2}
          container
          alignItems={"center"}
          flexWrap={"nowrap"}
          justifyContent={"center"}
        >
          <Settings />
          <ProfileLogin />
        </Grid>
      </Grid>
    </AppBar>
  );
};
