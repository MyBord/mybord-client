import * as React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
const AboutPage = React.lazy(() => import('./aboutPage'));
const DashboardPage = React.lazy(() => import('./dashboardPage'));
const TrendingPage = React.lazy(() => import('./trendingPage'));

const Routes: React.FC = () => {
  const location = useLocation();
  return (
    <Switch location={location} key={location.key}>
      <Route exact path="/pageOne">
        <DashboardPage />
      </Route>
      <Route exact path="/pageTwo">
        <AboutPage />
      </Route>
      <Route exact path="/pageThree">
        <TrendingPage />
      </Route>
    </Switch>
  );
};

export default Routes;
