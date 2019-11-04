import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import CantPage from 'pages/cantPage/cantPage';
import DashboardPage from 'pages/dashboardPage/dashboardPage';
import FollowingPage from 'pages/followingPage/followingPage';
import Spinner from 'icons/spinner/spinner';
import TrendingPage from 'pages/trendingPage/trendingPage';

const Routes: React.FC = () => (
  <Switch>
    <Route
      exact
      path="/"
    >
      <React.Suspense fallback={<Spinner />}>
        <DashboardPage />
      </React.Suspense>
    </Route>
    <Route
      exact
      path="/following"
    >
      <React.Suspense fallback={<Spinner />}>
        <FollowingPage />
      </React.Suspense>
    </Route>
    <Route
      exact
      path="/trending"
    >
      <React.Suspense fallback={<Spinner />}>
        <TrendingPage />
      </React.Suspense>
    </Route>
    <Route
      path="*"
      component={CantPage}
    />
  </Switch>
);

export default Routes;
