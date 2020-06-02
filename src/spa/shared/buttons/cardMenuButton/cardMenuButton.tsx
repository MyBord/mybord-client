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

  React.useEffect(() => {
    const buttonNode = buttonRef.current;
    const overlayNode = overlayRef.current;
    const popoverNode = popoverRef.current;

    const handleMouseOver = (): void => {
      if (showMenu) { setShowMenu(true); }
    };
    const handleMouseLeave = (): void => {
      if (showMenu) { setShowMenu(false); }
    };

    if (buttonNode) {
      buttonNode.addEventListener('mouseover', handleMouseOver);
    }
    if (overlayNode) {
      overlayNode.addEventListener('mouseleave', handleMouseLeave);
    }
    if (popoverNode) {
      popoverNode.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      buttonNode.removeEventListener('mouseover', handleMouseOver);
      overlayNode.removeEventListener('mouseleave', handleMouseLeave);
      popoverNode.removeEventListener('mouseover', handleMouseOver);
    };
  }, [buttonRef, overlayRef, popoverRef, showMenu]);

  const buttonClassName = showMenu ? 'card-menu-button-show' : 'card-menu-button';
  return (
    <>
      <div className={styles.overlay} ref={overlayRef} />
      <Popover
        Content={CardMenuButtonContent}
        gap={2.5}
        show={showMenu}
        ref={popoverRef}
      />
      <button
        className={[styles.button, buttonClassName].join(' ')}
        onClick={toggleMenu}
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

export default CardMenuButton;
