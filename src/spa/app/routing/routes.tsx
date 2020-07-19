import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch, useLocation } from 'react-router-dom';
const CantPage = React.lazy(() => import('pages/cantPage/cantPage'));
const DashboardPage = React.lazy(() => import('pages/dashboardPage/dashboardPage'));
const ErrorPage = React.lazy(() => import('pages/errorPage/errorPage'));
const FavoritesPage = React.lazy(() => import('pages/favoritesPage/favoritesPage'));
const FriendsPage = React.lazy(() => import('pages/friendsPage/friendsPage'));
const HistoryPage = React.lazy(() => import('pages/historyPage/historyPage'));
const InboxPage = React.lazy(() => import('pages/inboxPage/inboxPage'));
const PlaylistPage = React.lazy(() => import('pages/playlistPage/playlistPage'));
const TrendingPage = React.lazy(() => import('pages/trendingPage/trendingPage'));
import { MotionRedirect, MotionRoute } from 'utils/routing';

const Routes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        {/* ----- REDIRECTS ----- */}
        <MotionRoute exact path="/">
          <MotionRedirect to="/myBord" />
        </MotionRoute>
        <MotionRoute exact path="/login">
          <MotionRedirect to="/myBord" />
        </MotionRoute>
        {/* ----- PAGES ----- */}
        <MotionRoute exact path="/404">
          <CantPage />
        </MotionRoute>
        <MotionRoute exact path="/error">
          <ErrorPage />
        </MotionRoute>
        <MotionRoute exact path="/favorites">
          <FavoritesPage />
        </MotionRoute>
        <MotionRoute exact path="/friends">
          <FriendsPage />
        </MotionRoute>
        <MotionRoute exact path="/history">
          <HistoryPage />
        </MotionRoute>
        <MotionRoute exact path="/inbox">
          <InboxPage />
        </MotionRoute>
        <MotionRoute exact path="/myBord">
          <DashboardPage />
        </MotionRoute>
        <MotionRoute exact path="/playlist">
          <PlaylistPage />
        </MotionRoute>
        <MotionRoute exact path="/trending">
          <TrendingPage />
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
