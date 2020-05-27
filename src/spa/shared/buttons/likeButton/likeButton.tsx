import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from 'icons/icon/icon';
import * as styles from './likeButton.module.less';

const variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const LikeButton: React.FC = () => {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  return (
    <div>
      <button type="button" onClick={() => setIsLiked((prevState) => !prevState)}>
        <AnimatePresence>
          {
            isLiked ? (
              <motion.div
                animate="enter"
                className={styles.iconDiv}
                exit="exit"
                initial="initial"
                key="liked"
                variants={variants}
              >
                <Icon
                  color="orange"
                  fill="blue"
                  iconName="heart"
                  size={100}
                />
              </motion.div>
            ) : (
              <motion.div
                animate="enter"
                className={styles.iconDiv}
                exit="exit"
                initial="initial"
                key="notLiked"
                variants={variants}
              >
                <Icon
                  color="orange"
                  fill="transparentBlack"
                  iconName="heart"
                  size={100}
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
