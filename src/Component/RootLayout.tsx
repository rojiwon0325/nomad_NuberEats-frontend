import React from "react";

const RootLayout: React.FC = ({ children }) => {
  return <div className="h-full w-full flex flex-col bg-white">{children}</div>;
};

export default RootLayout;
