import { useQuery } from "@apollo/client";
import { ME_QUERY } from "Apollo/Query/user";
import { Button } from "Component";
import { findRestaurantById_findRestaurantById_result } from "Igql/findRestaurantById";
import { UserRole } from "Igql/globalTypes";
import { me } from "Igql/me";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ClientBoard from "./ClientBoard";
import OwnerBoard from "./OwnerBoard/OwnerBoard";

const DashBoard: React.FC<{
  restaurant: findRestaurantById_findRestaurantById_result;
}> = ({ restaurant }) => {
  const { data } = useQuery<me>(ME_QUERY);
  return (
    <>
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
        {data?.me?.role === UserRole.Owner ? (
          <>
            <div className="w-full flex-center py-2">
              <Link to="menu">
                <Button theme="black">메뉴 추가</Button>
              </Link>
              <Link to="restaurantinfo">
                <Button theme="green">가게 정보 수정</Button>
              </Link>
            </div>
            <OwnerBoard menu={restaurant.menu} />
          </>
        ) : (
          <ClientBoard menu={restaurant.menu} />
        )}
      </div>
    </>
  );
};

export default DashBoard;
