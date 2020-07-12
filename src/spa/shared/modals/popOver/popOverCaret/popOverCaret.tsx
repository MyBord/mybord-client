import * as React from 'react';
import {PopOverProps, PopOverCaretStyle } from 'types/modalTypes';
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
  const [popOverCaretStyle, setPopOverCaretStyle] = React.useState<PopOverCaretStyle>(null);
  const popOverPosition = popOverPlacement.split('-')[0]; // e.g. 'bottom', 'left', 'right', 'top',
  const caretPosition = [caretPlacement, popOverPosition].join('-'); // e.g. 'bottom-left',
  const caretColor = [popOverPosition, color].join('-'); // e.g. 'bottom-blue', 'left-white',

  if (popOverRef.current && caretPlacement === 'auto' && popOverCaretStyle === null) {
    const popOverRect = popOverRef.current.getBoundingClientRect();
    const childrenRect = childrenRef.getBoundingClientRect();
    const x = `${popOverRect.right - childrenRect.right}px`;
    const foo = { right: x };
    setPopOverCaretStyle(foo);
  }

  return (
    <div
      className={[
        styles.div,
        styles[popOverPosition],
        styles[caretPosition],
        styles[caretColor],
      ].join(' ')}
      style={popOverCaretStyle}
    />
  );
};

export default PopOverCaret;
