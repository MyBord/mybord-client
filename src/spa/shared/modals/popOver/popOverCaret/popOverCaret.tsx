import * as React from 'react';
import { PopOverProps } from 'types/modalTypes';
import ChildPopOverCaret from './childPopOverCaret';
import * as styles from './popOverCaret.module.less';

interface Props {
  caretPlacement: PopOverProps['caretPlacement'];
  childrenRef: HTMLElement;
  color: PopOverProps['color'];
  popOverPlacement: PopOverProps['placement'];
  popOverRef: React.RefObject<HTMLDivElement>;
}

const PopOverCaret: React.FC<Props> = ({
  caretPlacement,
  childrenRef,
  color,
  popOverPlacement,
  popOverRef,
}) => {
  const popOverPosition = popOverPlacement.split('-')[0]; // e.g. 'bottom', 'left', 'right', 'top',
  const caretPosition = [caretPlacement, popOverPosition].join('-'); // e.g. 'bottom-left',
  const caretColor = [popOverPosition, color].join('-'); // e.g. 'bottom-blue', 'left-white',

  const divClassName = [
    styles.div,
    styles[popOverPosition],
    styles[caretPosition],
    styles[caretColor],
  ].join(' ');

  let childrenRectRight = 0;
  let popOverRectRight = 0;
  if (popOverRef.current) {
    childrenRectRight = childrenRef.getBoundingClientRect().right;
    popOverRectRight = popOverRef.current.getBoundingClientRect().right;
  }

  return (
    <ChildPopOverCaret
      childrenRectRight={childrenRectRight}
      divClassName={divClassName}
      isAuto={caretPlacement === 'auto'}
      popOverRectRight={popOverRectRight}
    />
  );
};

export default PopOverCaret;
