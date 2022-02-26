import React from "react";

interface props {
  children?: React.ReactNode;
}
export default function RootLayout({ children }: props): JSX.Element {
  return <>{children}</>;
}
