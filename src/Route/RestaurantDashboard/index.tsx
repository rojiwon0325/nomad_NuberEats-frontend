import { useLazyQuery, useQuery } from "@apollo/client";
import { FINDRESTAURANTBYID_QUERY } from "Apollo/Query/restaurant";
import { ME_QUERY } from "Apollo/Query/user";
import {
  findRestaurantById,
  findRestaurantByIdVariables,
} from "Igql/findRestaurantById";
import { me } from "Igql/me";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NotFound } from "Route";
import DashBoard from "./DashBoard";

const RestaurantDashboard: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: myData } = useQuery<me>(ME_QUERY);
  const { data, loading } = useQuery<
    findRestaurantById,
    findRestaurantByIdVariables
  >(FINDRESTAURANTBYID_QUERY, { variables: { id: parseInt(id ?? "0") } });

  useEffect(() => console.log(id), [id]);

  if (data?.findRestaurantById.result) {
    return <DashBoard restaurant={data?.findRestaurantById.result} />;
  } else if (loading) {
    return <div>loading...</div>;
  } else {
    return <NotFound />;
  }
};

export default RestaurantDashboard;
