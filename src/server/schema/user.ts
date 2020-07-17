import gql from 'graphql-tag';

// ----- MUTATIONS ----- //

export const CREATE_USER_MUTATION = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(data: {email: $email, password: $password}) {
      id
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(data: {email: $email, password: $password}) {
      id
      email
    }
  }
`;

// ----- QUERIES ----- //

export const IS_AUTHENTICATED_QUERY = gql`
  query isAuthenticated {
    isAuthenticated
  }
`;

export const LOGOUT_USER_QUERY = gql`
  query logoutUser {
    logoutUser
  }
`;
