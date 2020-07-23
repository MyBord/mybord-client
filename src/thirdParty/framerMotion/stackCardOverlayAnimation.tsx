import * as React from 'react';
import { motion } from 'framer-motion';
import * as sizes from 'styles/_sizes.less';
import * as styles from './stackCardOverlayAnimation.module.less';

export const variants = {
  initial: {
    top: sizes.stackCardSize,
  },
  show: {
    top: '0rem',
    transition: {
      ease: 'easeOut',
      duration: 0.7,
    },
  },
};

interface Props {
  showOverlay: boolean;
}

const StackCardOverlayAnimation: React.FC<Props> = ({ showOverlay }) => (
  <motion.div
    animate={showOverlay ? 'show' : 'initial'}
    className={styles.overlayDiv}
    variants={variants}
  />
);

export default StackCardOverlayAnimation;
