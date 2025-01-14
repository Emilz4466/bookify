import { Box } from "@/components/Atoms";
import logo from "../../../assets/logo.png";
import title from "../../../assets/title.png";
import titleLogo from "../../../assets/titleLogo.png";

type LogoType = "logo" | "title" | "titleLogo";

interface LogoProps {
  type: LogoType;
  height?: number;
  width?: number;
}

const logoMap: Record<LogoType, string> = {
  logo,
  title,
  titleLogo,
};

export const Logo = (props: LogoProps) => {
  const { type, height, width } = props;
  const src = logoMap[type];

  return (
    <Box
      display={"flex"}
      sx={{ alignItems: "center", justifyContent: "center" }}
    >
      <img
        src={src}
        alt={type}
        style={{
          height: height ? `${height}px` : "unset",
          width: width ? `${width}px` : "unset",
        }}
      />
    </Box>
  );
};
