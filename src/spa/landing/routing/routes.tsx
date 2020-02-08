import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from 'landing/pages/landingPage/landingPage';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <LandingPage />
    </Route>
  </Switch>
);

export default Routes;
