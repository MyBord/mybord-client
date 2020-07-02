import * as React from 'react';
import Icon from 'icons/icon/icon';
import * as styles from './notificationsButton.module.less';

const NotificationsButton = React.forwardRef<HTMLButtonElement>((props, ref) => (
  <button
    className={styles.button}
    ref={ref}
    type="button"
  >
    <Icon iconName="notification" size={30} />
  </button>
));

export default NotificationsButton;
