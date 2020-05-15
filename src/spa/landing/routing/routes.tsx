import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ErrorPage from 'landing/pages/errorPage/errorPage';
import LoginPage from 'landing/pages/loginPage/loginPage';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/login">
      <LoginPage />
    </Route>
    <Route exact path="/error">
      <ErrorPage />
    </Route>
    <Redirect to="/login" />
  </Switch>
);

export default Routes;
