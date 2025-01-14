import { useContext } from "react";
import { SubviewContext } from "./SubviewContextProvider";

export const useSubviewCtx = () => {
  const context = useContext(SubviewContext);
  if (!context) {
    throw new Error("useSubview must be used within a SubviewProvider");
  }
  return context;
};
