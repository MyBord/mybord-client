import * as React from 'react';
import PopOver from 'modals/popOver/popOver';
import { UserCard } from 'schema/card';
import CardMenuButtonContentContainer from './cardMenuButtonContent/cardMenuButtonContentContainer';
import * as styles from './cardMenuButton.module.less';

interface Props {
  buttonRef: React.RefObject<HTMLButtonElement>;
  setShowMenu: (showMenu: boolean | ((prevState: boolean) => boolean)) => void;
  showMenu: boolean;
  userCard: UserCard;
}

const CardMenuButtonComponent: React.FC<Props> = ({
  buttonRef,
  setShowMenu,
  showMenu,
  userCard,
}) => {
  const buttonClassName = showMenu ? 'card-menu-button-show' : 'card-menu-button';
  return (
    <>
      <button
        className={[styles.button, buttonClassName].join(' ')}
        onClick={() => setShowMenu((prevState) => !prevState)}
        ref={buttonRef}
        type="button"
      >
        <div className={styles.div}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
      </button>
    </>
  );
};

export default CardMenuButtonComponent;
