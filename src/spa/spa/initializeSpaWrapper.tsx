import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useQuery } from '@apollo/react-hooks';
import SpaFallback from 'fallbacks/spaFallback/spaFallback';
import { IS_AUTHENTICATED } from 'schema/user';
import { getTwoChildOpacityTransition } from 'framerMotion/animationVariants';
import { useAuthenticationContext } from 'context/authenticationContext';
import { useHydrationContext } from 'context/hydrationContext';
import * as styles from './spa.module.less';

// This wrapper is responsible for initializing our SPA. Once all fetches, actions, etc have
// been performed, then the actual SPA can be rendered. In the meantime, we will load a spinner
// for the entire page. At the moment, the wrapper does the following on initialization:
//   * Performs a backend query to determine if the current user has already been authenticated
//     / has an existing session or not.
// Note: We are not using Suspense here because we cannot have transitions between fallbacks.

interface Props {
  isHydrated: boolean;
}

const SpaFallbackContainer: React.FC<Props> = ({ isHydrated }) => {
  const animationVariants = getTwoChildOpacityTransition(1.0);
  return (
    <AnimatePresence>
      <motion.div
        animate="enter"
        className={styles.fallbackDiv}
        exit="exit"
        initial="initial"
        key={isHydrated ? 'hydrated' : 'hydrating'}
        variants={
          isHydrated ? animationVariants.lastChild : animationVariants.firstChild
        }
      >
        {
          !isHydrated && <SpaFallback />
        }
      </motion.div>
    </AnimatePresence>
  );
};

const initializeSpaWrapper = (WrappedComponent: React.FC): React.FC => {
  const WrappedSpa: React.FC = () => {
    const { called, data, loading } = useQuery(IS_AUTHENTICATED);
    const [isInitializationComplete, setIsInitializationComplete] = React.useState(false);
    const { isAuthenticated, setAuthenticationStatus } = useAuthenticationContext();
    const { isHydrated } = useHydrationContext();

    if (called && !loading && !isInitializationComplete) {
      if (data.isAuthenticated) {
        setAuthenticationStatus(true);
      } else {
        setAuthenticationStatus(false);
      }
      setIsInitializationComplete(true);
    }

    const animationVariants = getTwoChildOpacityTransition(1.0);

    return (
      <AnimatePresence>
        <motion.div
          animate="enter"
          className={styles.spaDiv}
          exit="exit"
          initial="initial"
          key={isInitializationComplete ? 'initialized' : 'initializing'}
          variants={
            isInitializationComplete ? animationVariants.lastChild : animationVariants.firstChild
          }
        >
          <div className={styles.spaDivChild}>
            {
              (isInitializationComplete && isAuthenticated !== null) && <WrappedComponent />
            }
            <SpaFallbackContainer isHydrated={isHydrated} />
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return WrappedSpa;
};

export default initializeSpaWrapper;
