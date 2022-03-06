/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Restaurant
// ====================================================

export interface Restaurant_category {
  __typename: "Category";
  name: string;
}

export interface Restaurant {
  __typename: "Restaurant";
  id: number;
  name: string;
  coverImage: string;
  address: string;
  category: Restaurant_category | null;
}
