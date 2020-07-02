import * as React from 'react';
import PopOverAnimation from 'framerMotion/popOverAnimation';
import { PopOverProps, PopOverStyle } from 'types/modalTypes';
import getPopOverStyle from './getPopOverStyle';
import * as styles from './popOver.module.less';

interface Props extends PopOverProps {
  Content: React.ReactNode;
}

const PopOver: React.FC<Props> = ({
  Content,
  caretPosition = null,
  children,
  defaultVisible = false,
  placement = 'top-center',
}) => {
  const [showPopOver, setShowPopOver] = React.useState<boolean>(defaultVisible);
  const [popOverStyle, setPopOverStyle] = React.useState<PopOverStyle>(null);
  const childrenRef = React.useRef<HTMLDivElement>(null);
  const popOverRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const childrenNode = childrenRef.current;
    const popOverNode = popOverRef.current;

    const handleClick = (event: Event): void => {
      if (
        !showPopOver
        && childrenNode
        && childrenNode.contains(event.target as Node)
      ) {
        setShowPopOver(true);
      }

      if (
        showPopOver
        && childrenNode
        && childrenNode.contains(event.target as Node)
      ) {
        setShowPopOver(false);
      }

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

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [
    childrenRef,
    popOverRef,
    showPopOver,
    setShowPopOver,
  ]);

  React.useEffect(() => {
    if (popOverRef.current) {
      const style = getPopOverStyle(
        popOverRef.current.clientHeight,
        popOverRef.current.clientWidth,
        placement,
      );

      setPopOverStyle(style);
    }
  }, [placement, popOverRef]);

  return (
    <div className={styles.container}>
      <PopOverAnimation
        showPopOver={showPopOver}
        style={popOverStyle}
        ref={popOverRef}
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
      <span ref={childrenRef}>
        {children}
      </span>
    </div>
  );
};

export default PopOver;
