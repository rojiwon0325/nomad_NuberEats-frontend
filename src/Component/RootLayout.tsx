import React from "react";

interface props {
  children?: React.ReactNode;
}
export default function RootLayout({ children }: props): JSX.Element {
  return (
    <div className="h-screen w-screen flex flex-col bg-white">{children}</div>
  );
}
