import * as React from 'react';
import { PopOverProps } from 'types/modalTypes';
import * as styles from './popOverCaret.module.less';

interface Props {
  caretPlacement: PopOverProps['caretPlacement'];
  popOverPlacement: PopOverProps['placement'];
}

const PopOverCaret: React.FC<Props> = ({ caretPlacement, popOverPlacement }) => (
  <div className={[
    styles.div,
    styles[popOverPlacement.split('-')[0]],
    styles[[caretPlacement, popOverPlacement.split('-')[0]].join('-')],
  ].join(' ')}
  />
);

export default PopOverCaret;
