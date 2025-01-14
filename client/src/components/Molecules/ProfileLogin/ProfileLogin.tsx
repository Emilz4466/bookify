import {
  Avatar,
  Box,
  IconButton,
  PersonIcon,
  Tooltip,
} from "@/components/Atoms";
import { Subview, useSubviewCtx } from "@/components/Templates";
import { useTheme } from "@/theme/useTheme";
import { useTranslation } from "@/hooks/useTranslation";

export const ProfileLogin = () => {
  return <Subview trigger={<ProfileLoginTriggerIcon />}>{"test"}</Subview>;
};

const ProfileLoginTriggerIcon = () => {
  const { handleOpen } = useSubviewCtx();
  const theme = useTheme();
  const { t } = useTranslation();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    handleOpen(event);
  };

  return (
    <Box>
      <Tooltip
        placement={"top"}
        title={t("topbar.profileBtnTitle", { ns: ["main"] })}
      >
        <IconButton onClick={handleClick}>
          <Avatar
            sx={{
              width: 35,
              height: 35,
              backgroundColor: theme.theme.palette.primary.main,
            }}
          >
            <PersonIcon />
          </Avatar>
        </IconButton>
      </Tooltip>
    </Box>
  );
};
