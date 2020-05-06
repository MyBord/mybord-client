import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Redirect,
  RedirectProps,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import CantPage from 'pages/cantPage/cantPage';
import DashboardPage from 'pages/dashboardPage/dashboardPage';
import ErrorPage from 'pages/errorPage/errorPage';
import FavoritesPage from 'pages/favoritesPage/favoritesPage';
import FollowingPage from 'pages/followingPage/followingPage';
import HistoryPage from 'pages/historyPage/historyPage';
import InboxPage from 'pages/inboxPage/inboxPage';
import PlaylistPage from 'pages/playlistPage/playlistPage';
import Spinner from 'fallbacks/spinner/spinner';
import TrendingPage from 'pages/trendingPage/trendingPage';
import * as styles from './routes.module.less';

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.25 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25 },
  },
};

interface Props {
  children: React.ReactNode;
}

const RouteWrapper: React.FC<Props> = ({ children }) => (
  <React.Suspense fallback={<Spinner />}>
    <motion.section
      animate="enter"
      className={styles.section}
      exit="exit"
      initial="initial"
      variants={variants}
    >
      {children}
    </motion.section>
  </React.Suspense>
);

const MotionRedirect: React.FC<RedirectProps> = (props) => (
  <motion.div exit="undefined">
    <Redirect {...props} />
  </motion.div>
);

const Routes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        {/* ----- REDIRECTS ----- */}
        <Route exact path="/">
          <MotionRedirect to="/myBord" />
        </Route>
        <Route exact path="/login">
          <MotionRedirect to="/myBord" />
        </Route>
        {/* ----- PAGES ----- */}
        <Route exact path="/404">
          <RouteWrapper>
            <CantPage />
          </RouteWrapper>
        </Route>
        <Route exact path="/error">
          <RouteWrapper>
            <ErrorPage />
          </RouteWrapper>
        </Route>
        <Route exact path="/favorites">
          <RouteWrapper>
            <FavoritesPage />
          </RouteWrapper>
        </Route>
        <Route exact path="/following">
          <RouteWrapper>
            <FollowingPage />
          </RouteWrapper>
        </Route>
        <Route exact path="/history">
          <RouteWrapper>
            <HistoryPage />
          </RouteWrapper>
        </Route>
        <Route exact path="/inbox">
          <RouteWrapper>
            <InboxPage />
          </RouteWrapper>
        </Route>
        <Route exact path="/myBord">
          <RouteWrapper>
            <DashboardPage />
          </RouteWrapper>
        </Route>
        <Route exact path="/playlist">
          <RouteWrapper>
            <PlaylistPage />
          </RouteWrapper>
        </Route>
        <Route exact path="/trending">
          <RouteWrapper>
            <TrendingPage />
          </RouteWrapper>
        </Route>
        {/* ----- CATCH ALL ----- */}
        <Route path="/*">
          <MotionRedirect to="/404" />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
