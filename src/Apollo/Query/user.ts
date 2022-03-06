import { gql } from "@apollo/client";

export const USER_FRAGMENT = gql`
  fragment User on User {
    id
    email
    username
    role
    verified
  }
`;

export const ME_QUERY = gql`
  query me {
    me {
      ...User
    }
  }
  ${USER_FRAGMENT}
`;

export const ISLOGIN_QUERY = gql`
  query isLogin {
    isLogin
  }
`;

export const LOGOUT_QUERY = gql`
  query logout {
    logout
  }
`;

export const LOGIN_MUTATION = gql`
  mutation login($user: LoginInput!) {
    login(user: $user) {
      ok
      error
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

export const VERIFYEMAIL_MUTATION = gql`
  mutation verifyEmail($code: String!) {
    verifyEmail(code: $code) {
      ok
      error
      userId
    }
  }
`;
