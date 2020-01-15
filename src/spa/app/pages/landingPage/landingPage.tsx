import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import LoginFormContainer from 'forms/loginForm/loginFormContainer';
import loginBackground from 'assets/loginBackground.jpg';
import * as styles from './landingPage.module.less';

const GET_USERS = gql`
  {
    users {
      id
      email
    }
  }
`;

// @ts-ignore
const LandingPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log('*****');
  console.log(data);
  return (
    <main>
      <img
        alt="login-form-background"
        className={styles.img}
        src={loginBackground}
      />
      <LoginFormContainer />
    </main>
  );
};

export default LandingPage;
