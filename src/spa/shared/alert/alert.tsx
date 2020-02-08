import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Alert as AntAlert } from 'antd';
import Icon from 'icons/icon/icon';
import * as styles from './alert.module.less';
import './alert.less';

interface Props {
  message: string;
  showAlert: boolean;
}

const Alert: React.FC<Props> = ({ message, showAlert }) => (
  <AnimatePresence>
    {
      showAlert && (
        <motion.div
          className={styles.div}
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={{ maxHeight: '40px', opacity: 1 }}
          transition={{ duration: 0.6 }}
          exit={{ maxHeight: 0, opacity: 0 }}
        >
          <AntAlert
            className={styles.alert}
            message={message}
            icon={(
              <Icon
                color="orange"
                iconName="warning"
                size={16}
                strokeWidth={4.5}
              />
            )}
            showIcon
            type="warning"
          />
        </motion.div>
      )
    }
  </AnimatePresence>
);

export default Alert;
