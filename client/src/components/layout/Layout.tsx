import useHook from "@/hooks/useHook";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addWalletListener,
  getCurrentWalletConnected,
} from "../../../ethereum/metamask";
import Header from "./header/Header";

type Props = {
  children: React.ReactNode;
  hasHeader?: boolean;
};

const Layout: React.FC<Props> = ({ children, hasHeader = true }) => {
  const { setWalletAddress, walletAddress, setSigner, setContract } = useHook();
  useEffect(() => {
    getCurrentWalletConnected(setWalletAddress, setSigner, setContract);
    addWalletListener(setWalletAddress);
  }, [walletAddress]);
  return (
    <div className="min-h-screen bg-gray-900">
      {hasHeader && <Header />}
      <div className="px-4">{children}</div>

      <ToastContainer />
    </div>
  );
};

export default Layout;
