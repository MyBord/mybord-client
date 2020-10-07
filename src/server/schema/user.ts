import gql from 'graphql-tag';

// ----- MUTATIONS ----- //

export const CREATE_USER_MUTATION = gql`
  mutation createUser($email: String!, $password: String!, $username: String!) {
    createUser(data: {email: $email, password: $password, username: $username}) {
      id
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(data: {email: $email, password: $password}) {
      id
    }
  }
`;

// ----- QUERIES ----- //

export const GET_CURRENT_USER_QUERY = gql`
  query getCurrentUser {
    getCurrentUser {
      email
      isAuthenticated
      username
    }
  }
`;

export const LOGOUT_USER_QUERY = gql`
  query logoutUser {
    logoutUser
  }
`;
