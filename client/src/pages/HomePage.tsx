import {
  Box,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@/components/Atoms";
import { useFindAllProfiles } from "@/model/endpoint/profile-controller/profile-controller";

export const HomePage = () => {
  return (
    <Grid container size={12} sx={{ p: 0 }}>
      <Grid size={{ xs: 12, md: 4 }} sx={{ p: 0, pr: 2 }}>
        <Paper>
          <Box>
            <TestFindAll />
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
      <Grid size={{ xs: 12, md: 4 }} sx={{ p: 0, pt: 2 }}>
        <Paper>
          <Box sx={{ height: "780px" }}>
            <Typography>test bar 3</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

const TestFindAll = () => {
  const { data, isLoading, isFetching } = useFindAllProfiles();
  return (
    <>
      {isLoading || isFetching ? (
        <CircularProgress />
      ) : (
        <>
          {data?.map((profile) => (
            <>
              <Typography>{`id: ${profile.id}`}</Typography>
              <Typography>{`firstName: ${profile.firstName}`}</Typography>
              <Typography>{`email: ${profile.email}`}</Typography>
              <Typography>{`password: ${profile.password}`}</Typography>
              <Typography>{`role: ${profile.role}`}</Typography>
              <Typography>{`isAuthor: ${profile.isAuthor}`}</Typography>
            </>
          ))}
        </>
      )}
    </>
  );
};
