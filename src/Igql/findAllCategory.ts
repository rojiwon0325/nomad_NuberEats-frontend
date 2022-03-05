/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: findAllCategory
// ====================================================

export interface findAllCategory_findAllCategory_result {
  __typename: "Category";
  id: number;
  name: string;
  coverImage: string;
  restaurantCount: number;
}

export interface findAllCategory_findAllCategory {
  __typename: "AllCategoryOutput";
  ok: boolean;
  error: string | null;
  result: findAllCategory_findAllCategory_result[] | null;
}

export interface findAllCategory {
  findAllCategory: findAllCategory_findAllCategory;
}
