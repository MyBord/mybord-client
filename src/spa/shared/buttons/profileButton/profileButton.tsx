import * as React from 'react';
import Icon from 'icons/icon/icon';
import * as styles from './profileButton.module.less';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ProfileButton: React.FC<Props> = ({ onClick }) => (
  <button
    className={styles.button}
    onClick={onClick}
    type="button"
  >
    <Icon iconName="avatar" size={40} />
    <div className={styles.arrowDiv}>
      <Icon iconName="downArrow" size={10} />
    </div>
  </button>
);

export default ProfileButton;
