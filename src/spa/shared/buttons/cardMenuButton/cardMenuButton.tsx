import * as React from 'react';
import Popover from 'modals/popover/popover';
import CardMenuButtonContent from './cardMenuButtonContent';
import * as styles from './cardMenuButton.module.less';

const CardMenuButton: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const buttonRef = React.useRef(null);
  const overlayRef = React.useRef(null);
  const popoverRef = React.useRef(null);
  const toggleMenu = (): void => setShowMenu((prevState) => !prevState);
  const handleButtonMouseOver = (): void => {
    if (showMenu) {
      setShowMenu(true);
    }
  };
  const handleMouseOver = (): void => setShowMenu(true);
  const handleMouseOut = (): void => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  React.useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.addEventListener('mouseover', handleButtonMouseOver);
    }
    if (overlayRef.current) {
      overlayRef.current.addEventListener('mouseleave', handleMouseOut);
    }
    if (popoverRef.current) {
      popoverRef.current.addEventListener('mouseover', handleMouseOver);
    }
  }, [buttonRef, overlayRef, popoverRef, showMenu]);

  const buttonClassName = showMenu ? 'card-menu-button-show' : 'card-menu-button';
  return (
    <>
      <button
        className={[styles.button, buttonClassName].join(' ')}
        onClick={toggleMenu}
        ref={buttonRef}
        type="button"
      >
        <div className={styles.overlay} ref={overlayRef} />
        <div className={styles.div}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
        <Popover
          Content={CardMenuButtonContent}
          bottom={4.5}
          show={showMenu}
          ref={popoverRef}
        />
      </button>
    </>
  );
};

export default CardMenuButton;
