/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateDishInputType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createDish
// ====================================================

export interface createDish_createDish_result_option_choice {
  __typename: "Choice";
  name: string;
  extraPrice: number;
}

export interface createDish_createDish_result_option {
  __typename: "DishOption";
  name: string;
  choice: createDish_createDish_result_option_choice[];
}

export interface createDish_createDish_result {
  __typename: "Dish";
  id: number;
  name: string;
  price: number;
  coverImage: string;
  description: string;
  option: createDish_createDish_result_option[];
}

export interface createDish_createDish {
  __typename: "CreateDishOutput";
  ok: boolean;
  error: string | null;
  result: createDish_createDish_result | null;
}

export interface createDish {
  createDish: createDish_createDish;
}

export interface createDishVariables {
  restaurantId: number;
  data: CreateDishInputType;
}
