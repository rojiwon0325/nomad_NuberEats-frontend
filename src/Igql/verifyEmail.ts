/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: verifyEmail
// ====================================================

export interface verifyEmail_verifyEmail {
  __typename: "CoreOutput";
  ok: boolean;
  error: string | null;
}

export interface verifyEmail {
  verifyEmail: verifyEmail_verifyEmail;
}

export interface verifyEmailVariables {
  code: string;
}
