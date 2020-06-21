import * as React from 'react';
import PopOver from 'modals/popOver/popover';
import { PopOverProps } from 'types/modalTypes';
import * as styles from './popConfirm.module.less';

interface Props extends PopOverProps {
  node: React.RefObject<HTMLElement>;
  onHide: () => void;
}

const PopConfirm: React.FC<Props> = ({
  node,
  onHide,
  placement = 'right',
  position = { x: 0, y: 0 },
  show,
}) => (
  <PopOver
    Content={<h1>hello world</h1>}
    node={node}
    onHide={onHide}
    placement={placement}
    position={position}
    show={show}
  />
);

export default PopConfirm;
