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
    <div style={{ overflow: 'hidden', height: '100%' }}>
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
