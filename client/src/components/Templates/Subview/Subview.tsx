import React from "react";
import { Menu } from "@/components/Atoms";
import { SubviewProvider, useSubviewCtx } from "./context";

interface SubviewProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
}

export const Subview = (props: SubviewProps) => {
  return (
    <SubviewProvider>
      {props.trigger}
      <SubviewContent {...props} />
    </SubviewProvider>
  );
};

const SubviewContent = (props: SubviewProps) => {
  const { children } = props;

  const { anchorEl, open, handleClose } = useSubviewCtx();

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      {children}
    </Menu>
  );
};
