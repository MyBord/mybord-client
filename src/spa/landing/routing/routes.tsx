import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from 'landing/pages/landingPage/landingPage';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/login">
      <LandingPage />
    </Route>
    <Redirect to="/login" />
  </Switch>
);

export default Routes;
