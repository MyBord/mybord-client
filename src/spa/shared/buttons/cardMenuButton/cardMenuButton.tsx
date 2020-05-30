import * as React from 'react';
import Popover from 'modals/popover/popover';
import CardMenuButtonContent from './cardMenuButtonContent';
import * as styles from './cardMenuButton.module.less';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CardMenuButton: React.FC<Props> = ({ onClick }) => (
  <Popover
    Content={CardMenuButtonContent}
    hideTip
    placement="bottomRight"
  >
    <button className={styles.button} onClick={onClick} type="button">
      <div className={styles.div}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </button>
  </Popover>
);

export default CardMenuButton;
