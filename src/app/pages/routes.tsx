import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import CantPage from 'pages/cantPage/cantPage';
import DashboardPage from 'pages/dashboardPage/dashboardPage';
import FollowingPage from 'pages/followingPage/followingPage';
import TrendingPage from 'pages/trendingPage/trendingPage';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={DashboardPage}
    />
    <Route
      exact
      path="/following"
      component={FollowingPage}
    />
    <Route
      exact
      path="/trending"
      component={TrendingPage}
    />
    <Route
      path="*"
      component={CantPage}
    />
  </Switch>
);

export default Routes;
