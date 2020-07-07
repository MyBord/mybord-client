import * as React from 'react';
import PopOver from 'modals/popOver/popOver';
import Typography from 'typography/typography';
import { PopOverProps } from 'types/modalTypes';
import * as styles from './tooltip.module.less';

interface Props {
  caretPlacement?: PopOverProps['caretPlacement'];
  children: PopOverProps['children'];
  placement?: PopOverProps['placement'];
  text: string;
  trigger?: PopOverProps['trigger'];
}

const Tooltip: React.FC<Props> = ({
  caretPlacement = 'center',
  children,
  placement = 'top-center',
  text,
  trigger = 'hover',
}) => {
  const Content: React.FC = () => (
    <div className={styles.textDiv}>
      <Typography
        color="white"
        size="normal"
        text={text}
      />
    </div>
  );

  return (
    <PopOver
      Content={<Content />}
      caretPlacement={caretPlacement}
      color="blue"
      placement={placement}
      trigger={trigger}
    >
      {children}
    </PopOver>
  );
};

export default Tooltip;
