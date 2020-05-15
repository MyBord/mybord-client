import * as React from 'react';
import LoginFormFinal from 'forms/loginForm/loginFormFinal';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';

const LoginPage: React.FC = () => <LoginFormFinal />;

export default pageWrapper(LoginPage);
