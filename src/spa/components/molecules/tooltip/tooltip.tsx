import * as React from 'react';
import PopOver from 'popOver/popOver';
import Typography from 'typography/typography';
import { PopOverProps } from 'types/modalTypes';
import * as styles from './tooltip.module.less';

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
        hasMargin={false}
        text={text}
        type="bodyDefault"
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
