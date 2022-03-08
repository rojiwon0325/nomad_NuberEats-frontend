/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: findRestaurantById
// ====================================================

export interface findRestaurantById_findRestaurantById_result_category {
  __typename: "Category";
  name: string;
}

export interface findRestaurantById_findRestaurantById_result_menu_option_choice {
  __typename: "Choice";
  name: string;
  extraPrice: number;
}

export interface findRestaurantById_findRestaurantById_result_menu_option {
  __typename: "DishOption";
  name: string;
  choice: findRestaurantById_findRestaurantById_result_menu_option_choice[];
}

export interface findRestaurantById_findRestaurantById_result_menu {
  __typename: "Dish";
  id: number;
  name: string;
  price: number;
  coverImage: string;
  description: string;
  option: findRestaurantById_findRestaurantById_result_menu_option[];
}

export interface findRestaurantById_findRestaurantById_result {
  __typename: "Restaurant";
  id: number;
  name: string;
  coverImage: string;
  address: string;
  category: findRestaurantById_findRestaurantById_result_category | null;
  ownerId: number | null;
  menu: findRestaurantById_findRestaurantById_result_menu[];
}

export interface findRestaurantById_findRestaurantById {
  __typename: "RestaurantOutput";
  ok: boolean;
  error: string | null;
  result: findRestaurantById_findRestaurantById_result | null;
}

export interface findRestaurantById {
  findRestaurantById: findRestaurantById_findRestaurantById;
}

export interface findRestaurantByIdVariables {
  id: number;
}
