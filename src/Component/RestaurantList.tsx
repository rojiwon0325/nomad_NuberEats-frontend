import { Restaurant } from "Igql/Restaurant";
import React from "react";
import { Link } from "react-router-dom";

const RestaurantList: React.FC<{
  restaurants: Restaurant[] | null;
}> = ({ restaurants }) => {
  return (
    <div className="h-full w-full max-w-5xl px-2 flex flex-wrap">
      {restaurants?.map((restaurant) => (
        <RestaurantItem restaurant={restaurant} key={restaurant.id} />
      ))}
    </div>
  );
};

export default React.memo(RestaurantList);

const RestaurantItem: React.FC<{
  restaurant: Restaurant;
}> = ({ restaurant: { id, address, coverImage, name, category } }) => {
  return (
    <div className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <Link
        to={`/restaurant/${id}`}
        className="w-full flex flex-col border-2 border-black border-opacity-30 hover:border-opacity-100 rounded-xl bg-white overflow-hidden group"
      >
        <div
          style={{ backgroundImage: `url(${coverImage})` }}
          className="bg-cover bg-center mb-3 py-28"
        ></div>
        <h3 className="px-2 pb-2 border-b border-black border-opacity-30 group-hover:border-opacity-100  text-xl overflow-hidden">
          {name}
        </h3>
        <h2 className="p-2 text-sm opacity-80">{category?.name}</h2>
      </Link>
    </div>
  );
};

//작게 보면 1열
// 사이즈에 따라 3열
