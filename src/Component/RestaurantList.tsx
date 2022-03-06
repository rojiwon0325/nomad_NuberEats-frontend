import { Restaurant } from "Igql/Restaurant";
import React from "react";

const RestaurantList: React.FC<{
  restaurants: Restaurant[] | null;
}> = ({ restaurants }) => {
  return (
    <div>
      {restaurants?.map((restaurant) => (
        <RestaurantItem restaurant={restaurant} key={restaurant.id} />
      ))}
    </div>
  );
};

export default React.memo(RestaurantList);

const RestaurantItem: React.FC<{
  restaurant: Restaurant;
}> = ({ restaurant }) => {
  return null;
};

//작게 보면 1열
// 사이즈에 따라 3열
