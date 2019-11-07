import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import spinnerAnimation from 'lotty/lotties/spinner.json';
import { motion, AnimatePresence } from 'framer-motion';
import * as styles from './spinner.module.scss';

interface Props {
  show: boolean;
}

const Spinner: React.FC<Props> = ({ show }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        key="child"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <LottiePlayer
          animationData={spinnerAnimation}
          autoplay
          loop
          size={400}
        />
      </motion.div>
    )}
  </AnimatePresence>
);

export default Spinner;
