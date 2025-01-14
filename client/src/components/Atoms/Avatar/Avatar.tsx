import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
} from "@mui/material";

interface AvatarProps extends Pick<MuiAvatarProps, "sx" | "children"> {}

export const Avatar = (props: AvatarProps) => {
  return <MuiAvatar {...props} />;
};
