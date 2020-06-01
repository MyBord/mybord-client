import * as React from 'react';
import AntPopover from 'modals/antPopover/antPopover';
import CardMenuButtonContent from './cardMenuButtonContent';
import * as styles from './cardMenuButton.module.less';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CardMenuButton: React.FC<Props> = ({ onClick }) => (
  <AntPopover
    Content={CardMenuButtonContent}
    hideTip
    overlayClassName={styles.popover}
    placement="bottomRight"
  >
    <button className={styles.button} onClick={onClick} type="button">
      <div className={styles.div}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </button>
  </AntPopover>
);

export default CardMenuButton;
