import * as React from 'react';
import { PopOverProps } from 'types/modalTypes';
import * as styles from './popOverCaret.module.less';

interface Props {
  caretPlacement: PopOverProps['caretPlacement'];
  color: PopOverProps['color'];
  popOverPlacement: PopOverProps['placement'];
}

const PopOverCaret: React.FC<Props> = ({
  caretPlacement,
  color,
  popOverPlacement,
}) => {
  const popOverPosition = popOverPlacement.split('-')[0]; // e.g. 'bottom', 'left', 'right', 'top',
  const caretPosition = [caretPlacement, popOverPosition].join('-'); // e.g. 'bottom-left',
  const caretColor = [popOverPosition, color].join('-'); // e.g. 'bottom-blue', 'left-white',
  return (
    <div className={[
      styles.div,
      styles[popOverPosition],
      styles[caretPosition],
      styles[caretColor],
    ].join(' ')}
    />
  );
};

export default PopOverCaret;
