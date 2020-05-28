import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from 'icons/icon/icon';
import * as styles from './likeButton.module.less';

interface Props {
  size: number;
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

const LikeButton: React.FC<Props> = ({ size }) => {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  // `hasBeenClicked` indicates if the LikeButton has been clicked. We need to know this so that
  // when we first mount the Like button, its initial opacity is set to 1, but all future
  // animations have an initial opacity set to 0.
  const [hasBeenClicked, setHasBeenClicked] = React.useState<boolean>(false);

  const handleClick = (): void => {
    setHasBeenClicked(true);
    setIsLiked((prevState) => !prevState);
  };

  return (
    <div>
      <button
        className={styles.button}
        onClick={handleClick}
        style={{ height: `${size}px`, width: `${size}px` }}
        type="button"
      >
        <AnimatePresence>
          {
            isLiked ? (
              <motion.div
                animate="enter"
                className={styles.iconDiv}
                exit="exit"
                initial="initial"
                key="liked"
                variants={!hasBeenClicked ? variants.firstAnimation : variants.subsequentAnimations}
              >
                <Icon
                  color="orange"
                  fill="red"
                  iconName="heart"
                  size={size}
                />
              </motion.div>
            ) : (
              <motion.div
                animate="enter"
                className={styles.iconDiv}
                exit="exit"
                initial="initial"
                key="notLiked"
                variants={!hasBeenClicked ? variants.firstAnimation : variants.subsequentAnimations}
              >
                <Icon
                  color="orange"
                  fill="transparentBlack"
                  iconName="heart"
                  size={size}
                />
              </motion.div>
            )
          }
        </AnimatePresence>
      </button>
    </div>
  );
};

export default LikeButton;
