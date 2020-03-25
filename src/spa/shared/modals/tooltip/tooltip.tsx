import * as React from 'react';
import { Tooltip as AntTooltip } from 'antd';
import './tooltip.less';

interface Props {
  children: React.ReactNode;
  delay?: number;
  placement: 'bottom' | 'left' | 'right' | 'top';
  text: string;
}

const Tooltip: React.FC<Props> = ({
  children,
  delay = null,
  placement,
  text,
}) => (
  <AntTooltip
    mouseEnterDelay={delay || 0.1}
    overlayClassName="myBord-ant-tooltip"
    placement={placement}
    title={text}
  >
    {children}
  </AntTooltip>
);

export default Tooltip;
