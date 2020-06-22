import * as React from 'react';
import { UserCard } from 'schema/card';
import CardMenuButtonComponent from './cardMenuButtonComponent';

interface Props {
  containerRef: React.MutableRefObject<HTMLDivElement>;
  userCard: UserCard;
}

const CardMenuButtonContainer: React.FC<Props> = ({ containerRef, userCard }) => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

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

  return (
    <CardMenuButtonComponent
      buttonRef={buttonRef}
      setShowMenu={setShowMenu}
      showMenu={showMenu}
      userCard={userCard}
    />
  );
};

export default CardMenuButtonContainer;
