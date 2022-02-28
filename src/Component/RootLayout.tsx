import React from "react";

interface props {
  children?: React.ReactNode;
}
const RootLayout: React.FC<props> = ({ children }) => {
  return <div className="h-full w-full flex flex-col bg-white">{children}</div>;
};

export default RootLayout;
