import { Box, CircularProgress, Typography } from "@/components/Atoms";
import { useFindAllProfiles } from "@/model/endpoint/profile-controller/profile-controller";
import { ElementContainer } from "@/components/Molecules/ElementContainer/ElementContainer";
import { Fragment } from "react";

export const HomePage = () => {
  return (
    <Fragment>
      <ElementContainer size={{ xs: 12, md: 4 }} pr>
        <TestFindAll />
      </ElementContainer>
      <ElementContainer size={{ xs: 12, md: 8 }}>
        <Typography>test bar 2</Typography>
      </ElementContainer>
      <ElementContainer size={{ xs: 12, md: 4 }} pt pr>
        <Box sx={{ height: "750px" }}>
          <Typography>test bar 3</Typography>
        </Box>
      </ElementContainer>
    </Fragment>
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
