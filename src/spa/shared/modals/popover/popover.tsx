import * as React from 'react';
import PopoverAnimation from 'framerMotion/popoverAnimation';
import { PopoverProps } from 'types/modalTypes';

interface Props extends PopoverProps {
  Content: React.FC;
}

const Popover = React.forwardRef<HTMLDivElement, Props>((
  {
    Content,
    placement = 'right',
    position = { x: 0, y: 0 },
    show,
  },
  ref,
) => (
  <PopoverAnimation
    placement={placement}
    position={position}
    ref={ref}
    show={show}
  >
    <Content />
  </PopoverAnimation>
));

export default Popover;
