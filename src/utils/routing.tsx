// This file creates common routing tooling that is used for our app.

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Redirect,
  RedirectProps,
  Route,
  RouteProps,
} from 'react-router-dom';
import Spinner from 'fallbacks/spinner/spinner';
import { routingVariants } from 'framerMotion/animationVariants';
import * as styles from './routing.module.less';

// ----- MOTION REDIRECT ----- //

export const MotionRedirect: React.FC<RedirectProps> = (props) => (
  <motion.div exit="undefined">
    <Redirect {...props} />
  </motion.div>
);

// ----- MOTION ROUTE ----- //

export const MotionRoute: React.FC<RouteProps> = ({ children, ...props }) => (
  <Route {...props}>
    <React.Suspense fallback={<h1>hello world</h1>}>
      <motion.section
        animate="enter"
        className={styles.section}
        exit="exit"
        initial="initial"
        variants={routingVariants}
      >
        {children}
      </motion.section>
    </React.Suspense>
  </Route>
);
