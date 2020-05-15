import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ErrorPage from 'landing/pages/errorPage/errorPage';
import LoginPage from 'landing/pages/loginPage/loginPage';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <LoginPage />
    </Route>
    <Route exact path="/error">
      <ErrorPage />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default Routes;
