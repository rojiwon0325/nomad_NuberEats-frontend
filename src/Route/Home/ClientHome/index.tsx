import React from "react";
import CategoryList from "./CategoryList";
import MainBanner from "../MainBanner";
import { User } from "Igql/User";

const ClientHome: React.FC<{ user: User }> = () => {
  return (
    <div className="h-full w-full bg-yellow-100">
      <MainBanner />
      <CategoryList />
    </div>
  );
};

export default ClientHome;
