import { AppBar, Box, Grid, Typography } from "@/components/Atoms";
import {
  ProfileLogin,
  Settings,
  TopbarSearchField,
} from "@/components/Molecules";

export const Topbar = () => {
  return (
    <AppBar position={"sticky"} color="default" elevation={4}>
      <Grid size={12} container>
        <Grid
          size={3}
          container
          justifyContent={"center"}
          alignItems={"center"}
        >
          {/*logo*/}
          <Typography variant={"h3"}>bookify</Typography>
        </Grid>
        <Grid size={7} container>
          <Box sx={{ width: "100%" }}>
            <TopbarSearchField />
          </Box>
        </Grid>
        <Grid size={1} container>
          <Settings />
        </Grid>
        <Grid size={1} container>
          <ProfileLogin />
        </Grid>
      </Grid>
    </AppBar>
  );
};
