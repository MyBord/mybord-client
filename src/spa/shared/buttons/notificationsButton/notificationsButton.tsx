import * as React from 'react';
import Icon from 'icons/icon/icon';
import * as styles from './notificationsButton.module.less';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NotificationsButton = React.forwardRef<HTMLButtonElement, Props>(({ onClick }, ref) => (
  <button
    className={styles.button}
    onClick={onClick}
    ref={ref}
    type="button"
  >
    <Icon iconName="notification" size={30} />
  </button>
));

export default NotificationsButton;
