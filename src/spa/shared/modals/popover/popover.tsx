import * as React from 'react';
import { Popover as AntPopover, Button } from 'antd';
import './popover.less';

interface Props {
  content: React.ReactNode;
  children: React.ReactNode;
  title?: string;
  trigger?: 'hover' | 'focus' | 'click';
}

const Popover: React.FC<Props> = ({
  content,
  children,
  title = null,
  trigger = 'click',
}) => (
  <AntPopover content={content} title={title} trigger={trigger}>
    {children}
  </AntPopover>
);

export default Popover;
