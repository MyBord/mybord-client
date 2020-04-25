import gql from 'graphql-tag';

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(data: {email: $email, password: $password}) {
      id
    }
  }
`;

export const IS_AUTHENTICATED = gql`
  query isAuthenticated {
    isAuthenticated
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(data: {email: $email, password: $password}) {
      id
    }
  }
`;

export const LOGOUT_USER = gql`
  query logoutUser {
    logoutUser
  }
`;
