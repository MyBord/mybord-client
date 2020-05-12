import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import App from 'app/app';
import Landing from 'landing/landing';
import { getTwoChildOpacityTransition } from 'framerMotion/commonVariants';
import { useAuthenticationContext } from 'context/authenticationContext';
import initializeSpaWrapper from './initializeSpaWrapper';
import * as styles from './spa.module.less';

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 1.0 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1.0 },
  },
};

// This component renders the application with a landing page or the actual application based
// on the users authentication status.
const SpaContainer: React.FC = () => {
  const { isAuthenticated } = useAuthenticationContext();
  return (
    <AnimatePresence>
      {
        isAuthenticated && (
          <motion.div
            animate="enter"
            className={styles.spa}
            exit="exit"
            initial="initial"
            key="isAuthenticated"
            variants={variants}
          >
            <div className={styles.div}>
              <App />
            </div>
          </motion.div>
        )
      }
      {
        !isAuthenticated && (
          <motion.div
            animate="enter"
            className={styles.spa}
            exit="exit"
            initial="initial"
            key="isNotAuthenticated"
            variants={variants}
          >
            <div className={styles.div}>
              <Landing />
            </div>
          </motion.div>
        )
      }
    </AnimatePresence>
  );
};

export default initializeSpaWrapper(SpaContainer);
