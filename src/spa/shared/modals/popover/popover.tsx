import * as React from 'react';
import PopoverAnimation from 'framerMotion/popoverAnimation';
import { PopoverProps } from 'types/modalTypes';

interface Props extends PopoverProps {
  Content: React.ReactNode;
  node: React.RefObject<HTMLElement>;
  onHide: () => void;
}

const Popover: React.FC<Props> = ({
  Content,
  node,
  onHide,
  placement = 'right',
  position = { x: 0, y: 0 },
  show,
}) => {
  const popoverRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const buttonNode = node && node.current;
    const popoverNode = popoverRef.current;

    const handleClickOutside = (event: Event): void => {
      if (
        show
        && popoverNode
        && !popoverNode.contains(event.target as Node)
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
  }, [node, onHide, popoverRef, show]);

  return (
    <PopoverAnimation
      placement={placement}
      position={position}
      ref={popoverRef}
      show={show}
    >
      {Content}
    </PopoverAnimation>
  );
};

export default Popover;
