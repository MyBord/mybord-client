import * as React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import * as styles from './pageIndicator.module.less';

const variants = {
  '/': {
    top: '0.5rem',
    transition: { ease: 'easeOut', duration: 0.5 },
  },
  '/following': {
    top: '5rem',
    transition: { ease: 'easeOut', duration: 0.5 },
  },
  '/trending': {
    top: '9.5rem',
    transition: { ease: 'easeOut', duration: 0.5 },
  },
};

const PageIndicator: React.FC = () => {
  const location = useLocation();
  return (
    <div className={styles.parentDiv}>
      <div className={styles.div}>
        <motion.span
          initial={false}
          animate={location.pathname}
          className={styles.span}
          variants={variants}
        />
      </div>
    </div>
  );
};

export default PageIndicator;
