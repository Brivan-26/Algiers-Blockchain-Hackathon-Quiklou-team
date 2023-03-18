import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Header from "./header/Header";

type Props = {
  children: React.ReactNode;
  hasHeader?: boolean;
};

const Layout: React.FC<Props> = ({ children, hasHeader = true }) => {
  
  return (
    <div className="min-h-screen bg-gray-900">
      {hasHeader && <Header />}
      <div className="px-4">{children}</div>

      <ToastContainer />
    </div>
  );
};

export default Layout;
