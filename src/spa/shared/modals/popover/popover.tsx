import * as React from 'react';
import PopoverAnimation from 'framerMotion/popoverAnimation';
import { PopoverProps } from 'types/modalTypes';

interface Props extends PopoverProps {
  Content: React.FC;
}

const Popover = React.forwardRef<HTMLDivElement, Props>((
  {
    Content,
    gap,
    placement = 'right',
    show,
  },
  ref,
) => (
  <PopoverAnimation
    gap={gap}
    show={show}
    placement={placement}
    ref={ref}
  >
    <Content />
  </PopoverAnimation>
));

export default Popover;
