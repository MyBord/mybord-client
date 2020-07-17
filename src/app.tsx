import * as React from 'react';
import gql from 'graphql-tag';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import './index.less';

const IS_AUTHENTICATED = gql`
  query isAuthenticated {
    isAuthenticated
  }
`;

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        firstName
      }
    }
  }
`;

const App: React.FC = () => {
  const [
    isAuthenticated,
    { called: authCalled, data: authData, loading: authLoading },
  ] = useLazyQuery(IS_AUTHENTICATED);
  const [
    loginUser,
    { called: loginCalled, data: loginData, loading: loginLoading },
  ] = useMutation(LOGIN);

  const handleLogin = async (): Promise<void> => {
    await loginUser({
      variables: {
        email: 'john@gmail.com',
        password: 'abc',
      },
    });
  };

  if (authCalled && !authLoading) {
    console.log(' --- Is Authenticated Response: --- ');
    console.log(authData);
  }

  if (loginCalled && !loginLoading) {
    console.log(' --- Login Response: --- ');
    console.log(loginData);
  }

  return (
    <h1>hello world</h1>
  );
};

export default App;
