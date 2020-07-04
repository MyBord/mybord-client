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
  const [childRef, setChildRef] = React.useState<HTMLElement>(null);
  const [popOverStyle, setPopOverStyle] = React.useState<PopOverStyle>(null);
  const popOverRef = React.useRef<HTMLDivElement>(null);
  const newChildren = React.cloneElement(
    children,
    { ref: (node: HTMLElement) => setChildRef(node) },
  );

  React.useEffect(() => {
    if (childRef && popOverRef.current) {
      const childRect = childRef.getBoundingClientRect();
      const popOverRect = popOverRef.current.getBoundingClientRect();
      const style = getPopOverStyle(childRect, popOverRect, placement, !!caretPlacement);
      setPopOverStyle(style);
    }
  }, [caretPlacement, childRef, placement, popOverRef]);

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
