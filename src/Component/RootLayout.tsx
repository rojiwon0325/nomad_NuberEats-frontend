import React from "react";

interface props {
  children?: React.ReactNode;
}
export default function RootLayout({ children }: props): JSX.Element {
  return <div className="h-full w-full flex flex-col bg-white">{children}</div>;
}
