/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: findAllMyRestaurant
// ====================================================

export interface findAllMyRestaurant_findAllMyRestaurant_result_category {
  __typename: "Category";
  name: string;
}

export interface findAllMyRestaurant_findAllMyRestaurant_result {
  __typename: "Restaurant";
  id: number;
  name: string;
  coverImage: string;
  address: string;
  category: findAllMyRestaurant_findAllMyRestaurant_result_category | null;
}

export interface findAllMyRestaurant_findAllMyRestaurant {
  __typename: "RestaurantsOutput";
  ok: boolean;
  error: string | null;
  totalResults: number | null;
  result: findAllMyRestaurant_findAllMyRestaurant_result[] | null;
}

export interface findAllMyRestaurant {
  findAllMyRestaurant: findAllMyRestaurant_findAllMyRestaurant;
}

export interface findAllMyRestaurantVariables {
  page?: number | null;
}
