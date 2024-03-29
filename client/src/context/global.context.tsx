import React, { createContext, useMemo, useState } from "react";

export const context = createContext<any>({
  test: "Islem",
});

type Props = {
  children: React.ReactNode;
};

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [contract, setContract] = useState();
  const [signer, setSigner] = useState();
  const [walletAddress, setWalletAddress] = useState("");
  const values = {
    contract,
    setContract,
    signer,
    setSigner,
    walletAddress,
    setWalletAddress,
  };

  return <context.Provider value={values}>{children}</context.Provider>;
};

export default ContextProvider;
