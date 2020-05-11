import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import App from 'app/app';
import Landing from 'landing/landing';
import { getTwoChildOpacityTransition } from 'framerMotion/commonVariants';
import { useAuthenticationContext } from 'context/authenticationContext';
import initializeSpaWrapper from './initializeSpaWrapper';
import * as styles from './spa.module.less';

// This component renders the application with a landing page or the actual application based
// on the users authentication status.
const SpaContainer: React.FC = () => {
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
        variants={isAuthenticated ? animationVariants.lastChild : animationVariants.firstChild}
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

export default initializeSpaWrapper(SpaContainer);
