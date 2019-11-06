import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import spinnerAnimation from 'lotty/lotties/spinner.json';
import { motion, AnimatePresence } from 'framer-motion';
import SpinnerTwo from './spinnertwo';
import * as styles from './spinner.module.scss';

const Spinner: React.FC = () => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    setShow(true);
    return () => setShow(false);
  });
  return (
    <SpinnerTwo show={show} />
  );
};

export default Spinner;
