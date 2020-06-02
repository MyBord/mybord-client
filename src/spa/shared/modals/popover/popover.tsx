import * as React from 'react';
import PopoverAnimation from 'framerMotion/popoverAnimation';

interface Props {
  Content: React.FC;
  gap: number;
  placement?: 'left' | 'right';
  show: boolean;
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
