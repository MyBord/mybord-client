import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useHydrationContext } from 'context/hydrationContext';
import { getTwoChildOpacityTransition } from './commonVariants';
import * as styles from './animations.module.less';

interface Props {
  children: React.ReactNode;
}

// See *1 and *2 in `hydrationContext.tsx`
const SpaFallbackAnimation: React.FC<Props> = ({ children }) => {
  const animationVariants = getTwoChildOpacityTransition(0.5);
  const { isAnimationComplete, isHydrated } = useHydrationContext();
  const shouldRender = !isAnimationComplete || !isHydrated;
  return (
    <AnimatePresence>
      {
        shouldRender && (
          <motion.div
            animate="enter"
            className={styles.spaFallback}
            exit="exit"
            initial="initial"
            key={shouldRender ? 'hydrated' : 'hydrating'}
            variants={
              shouldRender ? animationVariants.lastChild : animationVariants.firstChild
            }
          >
            {children}
          </motion.div>
        )
      }
    </AnimatePresence>
  );
};

export default SpaFallbackAnimation;
