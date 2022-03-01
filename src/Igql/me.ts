/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserRole } from "./globalTypes";

// ====================================================
// GraphQL query operation: me
// ====================================================

export interface me_me {
  __typename: "User";
  id: number;
  email: string;
  username: string;
  role: UserRole;
  verified: boolean;
}

export interface me {
  me: me_me | null;
}
