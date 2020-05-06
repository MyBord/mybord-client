// This file creates common routing tooling that is used for our app.

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Redirect,
  RedirectProps,
  Route,
} from 'react-router-dom';

interface MotionRedirectProps extends RedirectProps {
  bar: string;
}

export const MotionRedirect: React.FC<RedirectProps> = (props) => (
  <motion.div exit="undefined">
    <Redirect {...props} />
  </motion.div>
);
