import React from "react";
import CategoryList from "./CategoryList";
import MainBanner from "../MainBanner";
import { me_me } from "Igql/me";

const ClientHome: React.FC<{ user: me_me }> = () => {
  return (
    <div className="h-full w-full bg-yellow-100">
      <MainBanner />
      <CategoryList />
    </div>
  );
};

export default ClientHome;
