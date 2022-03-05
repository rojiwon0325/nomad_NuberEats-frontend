import React from "react";
import CategoryList from "./CategoryList";
import MainBanner from "./MainBanner";

const Home: React.FC = () => {
  return (
    <div className="h-full w-full bg-yellow-100">
      <MainBanner />
      <CategoryList />
    </div>
  );
};

export default Home;
