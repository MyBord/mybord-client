import * as React from 'react';
import PopOverAnimation from 'framerMotion/popOverAnimation';
import { PopOverProps } from 'types/modalTypes';

interface Props extends PopOverProps {
  Content: React.ReactNode;
  node: React.RefObject<HTMLElement>;
  onHide: () => void;
}

const PopOver: React.FC<Props> = ({
  Content,
  node,
  onHide,
  placement = 'right',
  position = { x: 0, y: 0 },
  show,
}) => {
  const popOverRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const buttonNode = node && node.current;
    const popOverNode = popOverRef.current;

    const handleClickOutside = (event: Event): void => {
      if (
        show
        && popOverNode
        && !popOverNode.contains(event.target as Node)
        && buttonNode
        && !buttonNode.contains(event.target as Node)
      ) {
        onHide();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [node, onHide, popOverRef, show]);

  return (
    <PopOverAnimation
      placement={placement}
      position={position}
      ref={popOverRef}
      show={show}
    >
      {Content}
    </PopOverAnimation>
  );
};

export default PopOver;
