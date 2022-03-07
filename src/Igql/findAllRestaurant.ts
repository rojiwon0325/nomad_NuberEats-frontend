/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: findAllRestaurant
// ====================================================

export interface findAllRestaurant_findAllRestaurant_result_category {
  __typename: "Category";
  name: string;
}

export interface findAllRestaurant_findAllRestaurant_result {
  __typename: "Restaurant";
  id: number;
  name: string;
  coverImage: string;
  address: string;
  category: findAllRestaurant_findAllRestaurant_result_category | null;
}

export interface findAllRestaurant_findAllRestaurant {
  __typename: "RestaurantsOutput";
  ok: boolean;
  error: string | null;
  totalResults: number | null;
  result: findAllRestaurant_findAllRestaurant_result[] | null;
}

export interface findAllRestaurant {
  findAllRestaurant: findAllRestaurant_findAllRestaurant;
}

export interface findAllRestaurantVariables {
  page?: number | null;
}
