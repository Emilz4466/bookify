import {
  Avatar,
  Box,
  Grid,
  IconButton,
  PersonIcon,
  Tooltip,
} from "@/components/Atoms";
import { Subview, useSubviewCtx } from "@/components/Templates";

export const ProfileLogin = () => {
  return (
    <Grid container size={12} alignItems={"center"}>
      <Subview trigger={<ProfileLoginTriggerIcon />}>{"test"}</Subview>
    </Grid>
  );
};

const ProfileLoginTriggerIcon = () => {
  const { handleOpen } = useSubviewCtx();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    handleOpen(event);
  };

  return (
    <Box>
      <Tooltip title={"profil"}>
        <IconButton onClick={handleClick}>
          <Avatar sx={{ width: 35, height: 35 }}>
            <PersonIcon />
          </Avatar>
        </IconButton>
      </Tooltip>
    </Box>
  );
};
