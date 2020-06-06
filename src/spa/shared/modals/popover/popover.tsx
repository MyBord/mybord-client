import * as React from 'react';
import PopoverAnimation from 'framerMotion/popoverAnimation';
import { PopoverProps } from 'types/modalTypes';

interface Props extends PopoverProps {
  Content: React.FC;
  // todo: make node required prop
  node?: React.RefObject<HTMLElement>; // This is the node of the button that triggers the popover
}

const Popover = React.forwardRef<HTMLDivElement, Props>((
  {
    Content,
    node,
    placement = 'right',
    position = { x: 0, y: 0 },
    show,
  },
  ref,
) => {
  const popoverRef = ref || React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const buttonNode = node && node.current;
    const popoverNode = popoverRef.current;

    const handleClick = (): void => console.log('parent button or popover was clicked.');

    // todo: add event listener that is not in button node and not in popover node
    if (buttonNode) {
      buttonNode.addEventListener('click', handleClick);
    }
    if (popoverNode) {
      popoverNode.addEventListener('click', handleClick);
    }
  }, [node]);

  return (
    <PopoverAnimation
      placement={placement}
      position={position}
      ref={popoverRef}
      show={show}
    >
      <Content />
    </PopoverAnimation>
  );
});

export default Popover;
