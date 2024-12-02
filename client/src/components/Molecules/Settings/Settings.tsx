import { Subview, useSubviewCtx } from "@/components/Templates";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  SettingsIcon,
  Tooltip,
} from "@/components/Atoms";

export const Settings = () => {
  return (
    <Grid container size={12} alignItems={"center"}>
      <Subview trigger={<SettingsTriggerIcon />}>{"test"}</Subview>
    </Grid>
  );
};

const SettingsTriggerIcon = () => {
  const { handleOpen } = useSubviewCtx();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    handleOpen(event);
  };

  return (
    <Box>
      <Tooltip title={"ustawienia"}>
        <IconButton onClick={handleClick}>
          <Avatar sx={{ width: 35, height: 35 }}>
            <SettingsIcon />
          </Avatar>
        </IconButton>
      </Tooltip>
    </Box>
  );
};
