/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Dish
// ====================================================

export interface Dish_option_choice {
  __typename: "Choice";
  name: string;
  extraPrice: number;
}

export interface Dish_option {
  __typename: "DishOption";
  name: string;
  choice: Dish_option_choice[];
}

export interface Dish {
  __typename: "Dish";
  id: number;
  name: string;
  price: number;
  coverImage: string;
  description: string;
  option: Dish_option[];
}
