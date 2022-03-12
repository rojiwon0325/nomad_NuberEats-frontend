/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserRole {
  Admin = "Admin",
  Client = "Client",
  Owner = "Owner",
  Rider = "Rider",
}

export interface ChoiceInputType {
  name: string;
  extraPrice: number;
}

export interface CreateAccountInput {
  email: string;
  username: string;
  role: UserRole;
  password: string;
}

export interface CreateDishInputType {
  name: string;
  price: number;
  coverImage: string;
  description?: string | null;
  option?: DishOptionInputType[] | null;
}

export interface CreateRestaurantInput {
  name: string;
  coverImage: string;
  address: string;
  category?: string | null;
}

export interface DishOptionInputType {
  name: string;
  choice: ChoiceInputType[];
}

export interface LoginInput {
  email: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
