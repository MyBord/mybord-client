import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as styles from './userDashboardFiltersAnimation.module.less';

interface Props {
  children: React.ReactNode;
  showFilters: boolean;
}

const UserDashboardFiltersAnimation: React.FC<Props> = ({ children, showFilters }) => (
  <AnimatePresence>
    {
      showFilters && (
        <motion.div
          className={styles.div}
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 0.4 }}
          exit={{ height: 0 }}
        >
          {children}
        </motion.div>
      )
    }
  </AnimatePresence>
);

export default UserDashboardFiltersAnimation;
