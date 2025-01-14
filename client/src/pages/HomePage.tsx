import { Box, Grid, Paper, Typography } from "@/components/Atoms";

export const HomePage = () => {
  return (
    <Grid container size={12} sx={{ p: 0 }}>
      <Grid size={{ xs: 12, md: 4 }} sx={{ p: 0, pr: 2 }}>
        <Paper>
          <Box sx={{ height: "780px" }}>
            <Typography>test bar 1</Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, md: 8 }} sx={{ p: 0 }}>
        <Paper>
          <Box sx={{ height: "780px" }}>
            <Typography>test bar 2</Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ p: 0, pt: 2 }}>
        <Paper>
          <Box sx={{ height: "780px" }}>
            <Typography>test bar 3</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
