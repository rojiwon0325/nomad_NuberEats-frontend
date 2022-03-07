import React from "react";
import { Link } from "react-router-dom";
import {
  findAllMyRestaurant,
  findAllMyRestaurantVariables,
} from "Igql/findAllMyRestaurant";
import { FINDALLMYRESTAURANT_QUERY } from "Apollo/Query/restaurant";
import { useQuery } from "@apollo/client";
import { User } from "Igql/User";
import { RestaurantList } from "Component";

const OwnerHome: React.FC<{ user: User }> = () => {
  const { data, error } = useQuery<
    findAllMyRestaurant,
    findAllMyRestaurantVariables
  >(FINDALLMYRESTAURANT_QUERY);
  return (
    <div className="h-full w-full flex-center flex-col justify-start">
      <div className="py-2 sm:py-5 w-full flex-center bg-gray-800">
        <span className="text-white">사장님의 식당을 등록해주세요.</span>
        <Link
          to="/restaurant/register"
          className="py-3 px-6 border-2 border-white mx-2 opacity-80 rounded-lg hover:opacity-100 text-white"
        >
          나의 식당 등록하기
        </Link>
      </div>
      <RestaurantList restaurants={data?.findAllMyRestaurant.result ?? []} />
    </div>
  );
};

export default OwnerHome;

// 소유하는 식당 등록하기
// 소유하는 식당 리스트보기
