import React from "react";
import { context } from "@/context/global.context";

const useHook = () => {
  const values = React.useContext(context);
  if (!values) {
    throw new Error("useHook must be used within a ContextProvider");
  }
  return values;
};

export default useHook;
