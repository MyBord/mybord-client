import * as React from 'react';
import PopOver from 'modals/popOver/popOver';
import CardMenuButtonContent from './cardMenuButtonContent';
import * as styles from './cardMenuButton.module.less';

interface Props {
  buttonRef: React.RefObject<HTMLButtonElement>;
  cardId: string;
  setShowMenu: (showMenu: boolean | ((prevState: boolean) => boolean)) => void;
  showMenu: boolean;
}

const CardMenuButtonComponent: React.FC<Props> = ({
  buttonRef,
  cardId,
  setShowMenu,
  showMenu,
}) => {
  const buttonClassName = showMenu ? 'card-menu-button-show' : 'card-menu-button';
  return (
    <>
      <PopOver
        Content={<CardMenuButtonContent cardId={cardId} />}
        node={buttonRef}
        onHide={() => setShowMenu(false)}
        position={{ x: 0, y: 2.5 }}
        show={showMenu}
      />
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
