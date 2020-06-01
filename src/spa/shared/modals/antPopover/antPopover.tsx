import * as React from 'react';
import { Popover } from 'antd';
import * as styles from './antPopover.module.less';
import './antPopover.less';

interface Props {
  Content: React.FC;
  children: React.ReactNode;
  hideTip?: boolean;
  overlayClassName?: string;
  placement?: 'bottom' | 'bottomLeft' | 'bottomRight' | 'top';
  title?: string;
  trigger?: 'hover' | 'focus' | 'click';
  visible?: boolean;
}

const AntPopover: React.FC<Props> = ({
  Content,
  children,
  hideTip = false,
  overlayClassName = null,
  placement = 'top',
  title = null,
  trigger = 'click',
  visible,
}) => (
  <Popover
    content={<Content />}
    overlayClassName={[
      hideTip ? styles.hideTip : undefined,
      overlayClassName,
    ].join(' ')}
    placement={placement}
    title={title}
    trigger={trigger}
    visible={visible}
  >
    {children}
  </Popover>
);

export default AntPopover;
