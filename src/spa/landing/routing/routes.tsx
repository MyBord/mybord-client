import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
const AboutPage = React.lazy(() => import('landing/pages/aboutPage/aboutPage'));
const ErrorPage = React.lazy(() => import('landing/pages/errorPage/errorPage'));
const LoginPage = React.lazy(() => import('landing/pages/loginPage/loginPage'));

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <LoginPage />
    </Route>
    <Route exact path="/about">
      <AboutPage />
    </Route>
    <Route exact path="/error">
      <ErrorPage />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default Routes;
