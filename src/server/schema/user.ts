import gql from 'graphql-tag';

// ----- MUTATIONS ----- //

export const CREATE_USER_MUTATION = gql`
  mutation createUser($email: String!, $password: String!, $username: String!) {
    createUser(data: {email: $email, password: $password, username: $username}) {
      id
    }
  }
`;

export const DELETE_CURRENT_USER_MUTATION = gql`
  mutation deleteCurrentUser {
    deleteCurrentUser {
      id
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation loginUser($emailOrUsername: String!, $password: String!) {
    loginUser(data: {emailOrUsername: $emailOrUsername, password: $password}) {
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

export const VALIDATE_USER_SIGNUP = gql`
  query validateUserSignup($email: String!, $password: String!, $username: String!) {
    validateUserSignup(data: {email: $email, password: $password, username: $username})
  }
`;
