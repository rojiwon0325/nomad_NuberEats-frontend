import { useQuery } from "@apollo/client";
import { FINDRESTAURANTBYID_QUERY } from "Apollo/Query/restaurant";
import {
  findRestaurantById,
  findRestaurantByIdVariables,
} from "Igql/findRestaurantById";
import React from "react";
import { useParams } from "react-router-dom";
import { NotFound } from "Route";
import DashBoard from "./DashBoard";

const RestaurantDashboard: React.FC = () => {
  const { id } = useParams();
  const { data, loading } = useQuery<
    findRestaurantById,
    findRestaurantByIdVariables
  >(FINDRESTAURANTBYID_QUERY, { variables: { id: parseInt(id ?? "0") } });

  if (data?.findRestaurantById.result) {
    return <DashBoard restaurant={data?.findRestaurantById.result} />;
  } else if (loading) {
    return <div>loading...</div>;
  } else {
    return <NotFound />;
  }
};

export default RestaurantDashboard;
