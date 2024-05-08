import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch, useLocation } from 'react-router-dom';
import AboutDevPage from 'pages/aboutDevPage/aboutDevPage';
import AboutPage from 'pages/aboutPage/aboutPage';
import CantPage from 'pages/cantPage/cantPage';
import ErrorPage from 'pages/errorPage/errorPage';
import FriendsPage from 'pages/friendsPage/friendsPage';
import TrendingPage from 'pages/trendingPage/trendingPage';
import UserDashboardPage from 'pages/userDashboardPage/userDashboardPage';
import UserSettingsPage from 'pages/userSettingsPage/userSettingsPage';
import MotionRedirect from 'neutrons/routing/motionRedirect';
import MotionRoute from 'neutrons/routing/motionRoute';

const Routes: React.FC = () => {
  const usernamePath = `/user`;
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        {/* ----- REDIRECTS ----- */}
        <MotionRoute exact path="/">
          <MotionRedirect to={usernamePath} />
        </MotionRoute>
        <MotionRoute exact path="/login">
          <MotionRedirect to={usernamePath} />
        </MotionRoute>
        {/* ----- PAGES ----- */}
        <MotionRoute exact path="/404">
          {/* @ts-expect-error foo */}
          <CantPage />
        </MotionRoute>
        <MotionRoute exact path="/about">
          {/* @ts-expect-error foo */}
          <AboutPage />
        </MotionRoute>
        <MotionRoute exact path="/about/dev">
          {/* @ts-expect-error foo */}
          <AboutDevPage />
        </MotionRoute>
        <MotionRoute exact path="/error">
          {/* @ts-expect-error foo */}
          <ErrorPage />
        </MotionRoute>
        <MotionRoute exact path="/friends">
          {/* @ts-expect-error foo */}
          <FriendsPage />
        </MotionRoute>
        <MotionRoute exact path="/settings">
          {/* @ts-expect-error foo */}
          <UserSettingsPage />
        </MotionRoute>
        <MotionRoute exact path="/trending">
          {/* @ts-expect-error foo */}
          <TrendingPage />
        </MotionRoute>
        <MotionRoute exact path={usernamePath}>
          <UserDashboardPage />
        </MotionRoute>
        {/* ----- CATCH ALL ----- */}
        <MotionRoute path="/*">
          <MotionRedirect to="/404" />
        </MotionRoute>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
