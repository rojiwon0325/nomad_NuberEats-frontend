/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateRestaurantInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createRestaurant
// ====================================================

export interface createRestaurant_createRestaurant_result_category {
  __typename: "Category";
  name: string;
}

export interface createRestaurant_createRestaurant_result {
  __typename: "Restaurant";
  id: number;
  name: string;
  coverImage: string;
  address: string;
  category: createRestaurant_createRestaurant_result_category | null;
}

export interface createRestaurant_createRestaurant {
  __typename: "CreateRestaurantOutput";
  ok: boolean;
  error: string | null;
  result: createRestaurant_createRestaurant_result | null;
}

export interface createRestaurant {
  createRestaurant: createRestaurant_createRestaurant;
}

export interface createRestaurantVariables {
  restaurant: CreateRestaurantInput;
}
