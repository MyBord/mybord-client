import * as React from 'react';
import { Alert as AntAlert } from 'antd';
import Icon from 'icons/icon/icon';
import * as styles from './alert.module.less';
import './alert.less';

interface Props {
  message: string;
}

const Alert: React.FC<Props> = ({ message }) => (
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
);

export default Alert;
