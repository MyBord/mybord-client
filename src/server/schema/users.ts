import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(data: {email: $email, password: $password}) {
      id
      email
      password
    }
  }
`;
