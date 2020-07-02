import * as React from 'react';
import PopOverAnimation from 'framerMotion/popOverAnimation';
import { PopOverProps, PopOverStyle } from 'types/modalTypes';
import PopOverCaret from './popOverCaret/popOverCaret';
import * as styles from './popOver.module.less';

interface Props {
  Content: React.ReactNode;
  caretPlacement: PopOverProps['caretPlacement'];
  children: PopOverProps['children'];
  childrenRef: React.RefObject<HTMLDivElement>;
  placement: PopOverProps['placement'];
  popOverRef: React.RefObject<HTMLDivElement>;
  popOverStyle?: PopOverStyle;
  showPopOver: boolean;
}

const PopOverComponent: React.FC<Props> = ({
  Content,
  caretPlacement,
  children,
  childrenRef,
  placement,
  popOverRef,
  popOverStyle,
  showPopOver,
}) => (
  <div className={styles.container}>
    <PopOverAnimation
      showPopOver={showPopOver}
      style={popOverStyle}
      ref={popOverRef}
    >
      {
        caretPlacement && (
        <PopOverCaret caretPlacement={caretPlacement} popOverPlacement={placement} />
        )
      }
      {Content}
    </PopOverAnimation>
    <span ref={childrenRef}>
      {children}
    </span>
  </div>
);

export default PopOverComponent;
