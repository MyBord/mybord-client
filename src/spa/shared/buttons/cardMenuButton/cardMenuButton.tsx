import * as React from 'react';
import Popover from 'modals/popover/popover';
import CardMenuButtonContent from './cardMenuButtonContent';
import * as styles from './cardMenuButton.module.less';

interface Props {
  containerRef: React.MutableRefObject<HTMLDivElement>;
}

const CardMenuButton: React.FC<Props> = ({ containerRef }) => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const buttonRef = React.useRef(null);
  const popoverRef = React.useRef(null);
  const toggleMenu = (): void => setShowMenu((prevState) => !prevState);

  React.useEffect(() => {
    const buttonNode = buttonRef.current;
    const containerNode = containerRef.current;
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
    if (containerNode) {
      containerNode.addEventListener('mouseleave', handleMouseLeave);
    }
    if (popoverNode) {
      popoverNode.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      buttonNode.removeEventListener('mouseover', handleMouseOver);
      containerNode.removeEventListener('mouseleave', handleMouseLeave);
      popoverNode.removeEventListener('mouseover', handleMouseOver);
    };
  }, [buttonRef, containerRef, popoverRef, showMenu]);

  const buttonClassName = showMenu ? 'card-menu-button-show' : 'card-menu-button';
  return (
    <>
      <Popover
        Content={CardMenuButtonContent}
        position={{ x: 0, y: 2.5 }}
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
