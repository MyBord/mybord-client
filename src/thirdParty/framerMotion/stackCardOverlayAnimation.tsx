import * as React from 'react';
import { motion } from 'framer-motion';
import Typography from 'typography/typography';
import * as sizes from 'styles/_sizes.less';
import * as styles from './stackCardOverlayAnimation.module.less';

export const variants = {
  initial: {
    top: sizes.stackCardSize,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  show: {
    top: '0rem',
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

interface Props {
  showOverlay: boolean;
  text: string;
}

const StackCardOverlayAnimation: React.FC<Props> = ({ showOverlay, text }) => (
  <motion.div
    animate={showOverlay ? 'show' : 'initial'}
    className={styles.overlayDiv}
    variants={variants}
  >
    <div className={styles.typographyDiv}>
      <Typography
        color="white"
        size="four"
        text={text}
        weight="bold"
      />
    </div>
  </motion.div>
);

export default StackCardOverlayAnimation;
