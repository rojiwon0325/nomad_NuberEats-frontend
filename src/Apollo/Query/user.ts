import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation login($user: LoginInput!) {
    login(user: $user) {
      ok
      error
      token
    }
  }
`;

export const CREATEACCOUNT_MUTATION = gql`
  mutation createAccount($user: CreateAccountInput!) {
    createAccount(user: $user) {
      ok
      error
    }
  }
`;
