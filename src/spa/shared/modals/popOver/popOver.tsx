import * as React from 'react';
import PopOverAnimation from 'framerMotion/popOverAnimation';
import { PopOverProps } from 'types/modalTypes';
import * as styles from './popOver.module.less';

interface Props extends PopOverProps {
  Content: React.ReactNode;
}

const PopOver: React.FC<Props> = ({
  Content,
  caretPosition = null,
  children,
  defaultVisible = false,
  placement = 'right',
  position = { x: 0, y: 0 },
}) => {
  const [showPopOver, setShowPopOver] = React.useState<boolean>(defaultVisible);
  const childrenRef = React.useRef<HTMLDivElement>(null);
  const popOverRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const childrenNode = childrenRef.current;
    const popOverNode = popOverRef.current;

    const handleClickOutside = (event: Event): void => {
      if (
        showPopOver
        && popOverNode
        && !popOverNode.contains(event.target as Node)
        && childrenNode
        && !childrenNode.contains(event.target as Node)
      ) {
        setShowPopOver(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [
    childrenRef,
    popOverRef,
    showPopOver,
    setShowPopOver,
  ]);

  return (
    <>
      <PopOverAnimation
        placement={placement}
        position={position}
        ref={popOverRef}
        showPopOver={showPopOver}
      >
        {
          caretPosition && (
            <div className={[
              styles.caret,
              styles[caretPosition.split('-')[0]],
              styles[caretPosition.split('-')[1]],
            ].join(' ')}
            />
          )
        }
        {Content}
      </PopOverAnimation>
      <div ref={childrenRef}>
        {children}
      </div>
    </>
  );
};

export default PopOver;
