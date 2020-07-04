import * as React from 'react';
import Portal from 'shared/portal/portal';
import { PopOverProps, PopOverStyle } from 'types/modalTypes';
import PopOverCaret from './popOverCaret/popOverCaret';
import getPopOverStyle from './getPopOverStyle';
import * as styles from './popOverTwo.module.less';

interface Props extends PopOverProps {
  Content: React.ReactNode;
}

const PopOver: React.FC<Props> = ({
  Content,
  caretPlacement = null,
  children,
  placement = 'bottom-center',
}) => {
  const [childrenRef, setChildrenRef] = React.useState<HTMLElement>(null);
  const [popOverStyle, setPopOverStyle] = React.useState<PopOverStyle>(null);
  const popOverRef = React.useRef<HTMLDivElement>(null);
  const newChildren = React.cloneElement(
    children,
    { ref: (node: HTMLElement) => setChildrenRef(node) },
  );

  React.useEffect(() => {
    const getStyle = (): void => getPopOverStyle(
      caretPlacement,
      childrenRef,
      placement,
      popOverRef,
      setPopOverStyle,
    );

    getStyle();

    window.addEventListener('resize', getStyle);

    return () => {
      window.removeEventListener('resize', getStyle);
    };
  }, [caretPlacement, childrenRef, placement, popOverRef]);

  return (
    <>
      {newChildren}
      <Portal>
        <div
          className={styles.popOver}
          ref={popOverRef}
          style={popOverStyle}
        >
          {
            caretPlacement && (
              <PopOverCaret caretPlacement={caretPlacement} popOverPlacement={placement} />
            )
          }
          {Content}
        </div>
      </Portal>
    </>
  );
};

export default PopOver;
