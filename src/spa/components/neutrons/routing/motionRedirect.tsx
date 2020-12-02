import * as React from 'react';
import { Redirect, RedirectProps } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionRedirect: React.FC<RedirectProps> = (props) => (
  <motion.div exit="undefined">
    <Redirect {...props} />
  </motion.div>
);

export default MotionRedirect;
