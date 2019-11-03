import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from 'pages/dashboardPage/dashboardPage';
import FollowingPage from 'pages/followingPage/followingPage';
import TrendingPage from 'pages/trendingPage/trendingPage';

const Routes = () => (
  <BrowserRouter>
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
    </Switch>
  </BrowserRouter>
);

export default Routes;
