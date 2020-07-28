import * as React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
const AboutPage = React.lazy(() => import('pages/aboutPage'));
const DashboardPage = React.lazy(() => import('pages/dashboardPage/dashboardPage'));
const TrendingPage = React.lazy(() => import('pages/trendingPage'));

const Routes: React.FC = () => {
  const location = useLocation();
  return (
    <Switch location={location} key={location.key}>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route exact path="/myBord">
        <DashboardPage />
      </Route>
      <Route exact path="/trending">
        <TrendingPage />
      </Route>
    </Switch>
  );
};

export default Routes;
