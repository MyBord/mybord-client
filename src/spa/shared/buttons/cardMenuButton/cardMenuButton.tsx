import * as React from 'react';
import Popover from 'modals/popover/popover';
import CardMenuButtonContent from './cardMenuButtonContent';
import * as styles from './cardMenuButton.module.less';

interface Props {
  cardId: string;
  containerRef: React.MutableRefObject<HTMLDivElement>;
}

const CardMenuButton: React.FC<Props> = ({ cardId, containerRef }) => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const toggleMenu = (): void => setShowMenu((prevState) => !prevState);

  React.useEffect(() => {
    const buttonNode = buttonRef.current;
    const containerNode = containerRef.current;

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

    return () => {
      buttonNode.removeEventListener('mouseover', handleMouseOver);
      containerNode.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [buttonRef, containerRef, showMenu]);

  const buttonClassName = showMenu ? 'card-menu-button-show' : 'card-menu-button';
  return (
    <>
      <Popover
        Content={<CardMenuButtonContent />}
        node={buttonRef}
        onHide={() => setShowMenu(false)}
        position={{ x: 0, y: 2.5 }}
        show={showMenu}
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
