import * as React from 'react';
import Popover from 'modals/popover/popover';
import CardMenuButtonContent from './cardMenuButtonContent';
import * as styles from './cardMenuButton.module.less';

const CardMenuButton: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const toggleMenu = (): void => setShowMenu((prevState) => !prevState);

  return (
    <Popover
      Content={CardMenuButtonContent}
      hideTip
      overlayClassName={styles.popover}
      placement="bottomRight"
      visible={showMenu}
    >
      <button className={styles.button} onClick={toggleMenu} type="button">
        <div className={styles.div}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
      </button>
    </Popover>
  );
};

export default CardMenuButton;
