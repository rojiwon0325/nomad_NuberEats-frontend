import { findRestaurantById_findRestaurantById_result } from "Igql/findRestaurantById";
import React from "react";
import { Helmet } from "react-helmet-async";

const DashBoard: React.FC<{
  restaurant: findRestaurantById_findRestaurantById_result;
}> = ({ restaurant }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <Helmet>
        <title>{restaurant.name} | NuberEats</title>
      </Helmet>
      <div
        className="w-full py-24 sm:py-36 bg-gray-800 bg-center bg-cover"
        style={{
          backgroundImage: `url(${restaurant.coverImage})`,
        }}
      >
        <div className="w-fit pl-9 pr-4 py-8 bg-white">
          <h4 className="text-4xl mb-3">{restaurant.name}</h4>
          <h5 className="text-sm sm:text-base mb-2">
            {restaurant.category?.name}
          </h5>
          <h6 className="text-sm sm:text-base font-light">
            {restaurant.address}
          </h6>
        </div>
      </div>

      <div id="content"></div>
    </div>
  );
};

export default DashBoard;
