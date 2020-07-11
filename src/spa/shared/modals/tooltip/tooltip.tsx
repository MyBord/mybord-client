import * as React from 'react';
import PopOver from 'modals/popOver/popOver';
import Typography from 'typography/typography';
import { PopOverProps } from 'types/modalTypes';
import * as styles from './tooltip.module.less';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

interface Props {
  caretPlacement?: PopOverProps['caretPlacement'];
  children: PopOverProps['children'];
  delay?: PopOverProps['delay'];
  placement?: PopOverProps['placement'];
  text: string;
  trigger?: PopOverProps['trigger'];
}

const Tooltip: React.FC<Props> = ({
  caretPlacement = 'center',
  children,
  delay = null,
  placement = 'top-center',
  text,
  trigger = 'hover',
}) => {
  const Content: React.FC = () => (
    <div className={styles.textDiv}>
      <Typography
        color="white"
        size="normal"
        text={lorem}
      />
    </div>
  );

  return (
    <PopOver
      Content={<Content />}
      caretPlacement={caretPlacement}
      color="blue"
      delay={delay}
      placement={placement}
      trigger={trigger}
    >
      {children}
    </PopOver>
  );
};

export default Tooltip;
