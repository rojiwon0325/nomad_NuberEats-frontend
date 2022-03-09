import React from "react";
import CategoryList from "./CategoryList";
import MainBanner from "../MainBanner";
import { User } from "Igql/User";
import { RestaurantList } from "Component";
import { useQuery } from "@apollo/client";
import { FINDALLRESTAURANT_QUERY } from "Apollo/Query/restaurant";
import {
  findAllRestaurant,
  findAllRestaurantVariables,
} from "Igql/findAllRestaurant";
import { Helmet } from "react-helmet-async";

const ClientHome: React.FC<{ user: User }> = () => {
  const { data } = useQuery<findAllRestaurant, findAllRestaurantVariables>(
    FINDALLRESTAURANT_QUERY
  );
  return (
    <div className="h-full w-full">
      <Helmet>
        <title>Home | Nubereats</title>
      </Helmet>
      <MainBanner />
      <CategoryList />
      <RestaurantList restaurants={data?.findAllRestaurant.result ?? []} />
    </div>
  );
};

export default ClientHome;
