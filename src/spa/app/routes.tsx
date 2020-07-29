import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
const AboutPage = React.lazy(() => import('./aboutPage'));
const PageOne = React.lazy(() => import('./pageOne'));
const TrendingPage = React.lazy(() => import('./trendingPage'));

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/pageOne">
      <PageOne />
    </Route>
    <Route exact path="/pageTwo">
      <AboutPage />
    </Route>
    <Route exact path="/pageThree">
      <TrendingPage />
    </Route>
  </Switch>
);

export default Routes;
