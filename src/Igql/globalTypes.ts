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

export interface CreateAccountInput {
  email: string;
  username: string;
  role: UserRole;
  password: string;
}

export interface CreateRestaurantInput {
  name: string;
  coverImage: string;
  address: string;
  category?: string | null;
}

export interface LoginInput {
  email: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
