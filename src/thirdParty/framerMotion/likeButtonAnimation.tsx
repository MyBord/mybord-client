import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as styles from './likeButtonAnimation.module.less';

interface Props {
  children: React.ReactNodeArray;
  hasBeenClicked: boolean;
  isLiked: boolean;
}

const variants = {
  firstAnimation: {
    initial: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: { ease: 'easeOut', duration: 0.3 },
    },
  },
  subsequentAnimations: {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: { ease: 'easeOut', duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { ease: 'easeOut', duration: 0.3 },
    },
  },
};

const LikeButtonAnimation: React.FC<Props> = ({
  children,
  hasBeenClicked,
  isLiked,
}) => (
  <AnimatePresence>
    {
      isLiked ? (
        <motion.div
          animate="enter"
          className={styles.div}
          exit="exit"
          initial="initial"
          key="liked"
          variants={!hasBeenClicked ? variants.firstAnimation : variants.subsequentAnimations}
        >
          {children[0]}
        </motion.div>
      ) : (
        <motion.div
          animate="enter"
          className={styles.div}
          exit="exit"
          initial="initial"
          key="notLiked"
          variants={!hasBeenClicked ? variants.firstAnimation : variants.subsequentAnimations}
        >
          {children[1]}
        </motion.div>
      )
    }
  </AnimatePresence>
);

export default LikeButtonAnimation;
