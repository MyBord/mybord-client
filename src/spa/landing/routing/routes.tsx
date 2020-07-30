import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
const AboutDevPage = React.lazy(() => import('landing/pages/aboutDevPage/aboutDevPage'));
const AboutPage = React.lazy(() => import('landing/pages/aboutPage/aboutPage'));
const ErrorPage = React.lazy(() => import('landing/pages/errorPage/errorPage'));
const RootPage = React.lazy(() => import('landing/pages/rootPage/rootPage'));

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <RootPage />
    </Route>
    <Route exact path="/about">
      <AboutPage />
    </Route>
    <Route exact path="/about/dev">
      <AboutDevPage />
    </Route>
    <Route exact path="/error">
      <ErrorPage />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default Routes;
