import { Subview, useSubviewCtx } from "@/components/Templates";
import {
  Avatar,
  Box,
  IconButton,
  SettingsIcon,
  Tooltip,
} from "@/components/Atoms";
import { useTheme } from "@/theme/useTheme";
import { useTranslation } from "@/hooks/useTranslation";

export const Settings = () => {
  return <Subview trigger={<SettingsTriggerIcon />}>{"test"}</Subview>;
};

const SettingsTriggerIcon = () => {
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
        title={t("topbar.settingsBtnTitle", { ns: ["main"] })}
      >
        <IconButton onClick={handleClick}>
          <Avatar
            sx={{
              width: 35,
              height: 35,
              backgroundColor: theme.theme.palette.primary.main,
            }}
          >
            <SettingsIcon />
          </Avatar>
        </IconButton>
      </Tooltip>
    </Box>
  );
};
