import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useQuery } from '@apollo/react-hooks';
import PageFallback from 'fallbacks/pageFallback/pageFallback';
import { IS_AUTHENTICATED } from 'schema/user';
import { getTwoChildOpacityTransition } from 'framerMotion/animationVariants';
import * as styles from './spa.module.less';

interface Props {
  isAlreadyAuthenticated: boolean;
}

// This wrapper is responsible for initializing our SPA. Once all fetches, actions, etc have
// been performed, then the actual SPA can be rendered. In the meantime, we will load a spinner
// for the entire page. At the moment, the wrapper does the following on initialization:
//   * Performs a backend query to determine if the current user has already been authenticated
//     / has an existing session or not.
const initializeSpaWrapper = (WrappedComponent: React.FC<Props>): React.FC => {
  const WrappedSpa: React.FC = () => {
    const { called, data, loading } = useQuery(IS_AUTHENTICATED);
    const [initializationComplete, setInitializationComplete] = React.useState(false);

    if (called && !loading && !initializationComplete) {
      setInitializationComplete(true);
    }

    const animationVariants = getTwoChildOpacityTransition(1.0);

    return (
      <AnimatePresence>
        <motion.div
          animate="enter"
          className={styles.spaDiv}
          exit="exit"
          initial="initial"
          key={initializationComplete ? 'initialized' : 'initializing'}
          variants={
            initializationComplete ? animationVariants.lastChild : animationVariants.firstChild
          }
        >
          <div className={styles.spaDivChild}>
            {
              initializationComplete
                ? <WrappedComponent isAlreadyAuthenticated={data.isAuthenticated} />
                : <PageFallback />
            }
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return WrappedSpa;
};

export default initializeSpaWrapper;
