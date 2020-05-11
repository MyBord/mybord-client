import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useHydrationContext } from 'context/hydrationContext';
import { getTwoChildOpacityTransition } from './commonVariants';
import * as styles from './spaFallbackAnimation.module.less';

interface Props {
  children: React.ReactNode;
}

const SpaFallbackAnimation: React.FC<Props> = ({ children }) => {
  const animationVariants = getTwoChildOpacityTransition(0.5);
  const { isHydrated } = useHydrationContext();
  return (
    <AnimatePresence>
      <motion.div
        animate="enter"
        className={styles.div}
        exit="exit"
        initial="initial"
        key={isHydrated ? 'hydrated' : 'hydrating'}
        variants={
          isHydrated ? animationVariants.lastChild : animationVariants.firstChild
        }
      >
        { !isHydrated && children }
      </motion.div>
    </AnimatePresence>
  );
};

export default SpaFallbackAnimation;
