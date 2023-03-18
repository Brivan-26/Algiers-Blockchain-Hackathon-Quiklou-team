import React, { createContext, useMemo, useState } from "react";

export const context = createContext<any>({
  test: "Islem",
});

type Props = {
  children: React.ReactNode;
};

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [test, setTest] = useState("Islem");
  const values = useMemo(() => {
    return {
      test,
      setTest,
    };
  }, [test, setTest]);

  return <context.Provider value={values}>{children}</context.Provider>;
};

export default ContextProvider;
