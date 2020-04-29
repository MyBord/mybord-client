import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import App from 'app/app';
import Landing from 'landing/landing';
import { getTwoChildOpacityTransition } from 'framerMotion/animationVariants';
import { useAuthenticationContext } from 'context/authenticationContext';
import * as styles from './spa.module.less';

// This component renders when a user has not already been authenticated / they do not have an
// existing session with our application. When this occurs, we render the application with a
// landing page that requires the user to sign in, and then, if they sign / are authenticated,
// are directed to our 'app' via a nice FramerMotion transition.
const SpaWithLogin: React.FC = () => {
  const { isAuthenticated } = useAuthenticationContext();

  const animationVariants = getTwoChildOpacityTransition(1.0);

  return (
    <AnimatePresence>
      <motion.div
        animate="enter"
        className={styles.spaDiv}
        exit="exit"
        initial="initial"
        key={isAuthenticated ? 'isAuthenticated' : 'notAuthenticated'}
        variants={isAuthenticated ? animationVariants.app : animationVariants.landing}
      >
        <div className={styles.spaDivChild}>
          {
            isAuthenticated
              ? <App />
              : <Landing />
          }
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SpaWithLogin;
