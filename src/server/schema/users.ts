import gql from 'graphql-tag';

export const IS_AUTHENTICATED = gql`
  query isAuthenticated {
    isAuthenticated
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(data: {email: $email, password: $password}) {
      id
      email
    }
  }
`;
