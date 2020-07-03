// *1: This 'prentDiv' is needed in case the popover is contained in another div that is
// relatively positioned and needs to hide any overflow stylings.
// Source: https://stackoverflow.com/questions/4605715/position-absolute-and-overflow-hidden/50388523#50388523

import * as React from 'react';
import PopOverAnimation from 'framerMotion/popOverAnimation';
import { PopOverProps } from 'types/modalTypes';
import PopOverCaret from './popOverCaret/popOverCaret';
import * as styles from './popOver.module.less';

interface Props {
  Content: React.ReactNode;
  caretPlacement: PopOverProps['caretPlacement'];
  children: PopOverProps['children'];
  childrenRef: React.RefObject<HTMLDivElement>;
  placement: PopOverProps['placement'];
  popOverRef: React.RefObject<HTMLDivElement>;
  showPopOver: boolean;
}

const PopOverComponent: React.FC<Props> = ({
  Content,
  caretPlacement,
  children,
  childrenRef,
  placement,
  popOverRef,
  showPopOver,
}) => (
  <div className={styles.container}>
    {/* *1 */}
    <div className={styles.parentDiv}>
      <PopOverAnimation
        caretPlacement={caretPlacement}
        placement={placement}
        showPopOver={showPopOver}
        popOverRef={popOverRef}
      >
        {
          caretPlacement && (
            <PopOverCaret
              caretPlacement={caretPlacement}
              popOverPlacement={placement}
            />
          )
        }
        {Content}
      </PopOverAnimation>
      <div ref={childrenRef}>
        {children}
      </div>
    </div>
  </div>
);

export default PopOverComponent;
