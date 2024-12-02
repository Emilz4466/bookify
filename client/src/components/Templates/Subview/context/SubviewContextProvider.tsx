import { createContext, ReactNode, useState } from "react";

interface SubviewContextType {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
}

export const SubviewContext = createContext<SubviewContextType | undefined>(
  undefined,
);

export const SubviewProvider = ({ children }: { children: ReactNode }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <SubviewContext.Provider
      value={{ anchorEl, open, handleOpen, handleClose }}
    >
      {children}
    </SubviewContext.Provider>
  );
};
