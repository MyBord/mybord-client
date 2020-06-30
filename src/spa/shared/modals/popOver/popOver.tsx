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
  placement = 'top',
}) => {
  const [showPopOver, setShowPopOver] = React.useState<boolean>(defaultVisible);
  const childrenRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
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
    const containerNode = containerRef.current;

    if (containerNode) {
      console.log(containerNode.getBoundingClientRect());
    }
  }, [containerRef]);

  return (
    <div className={styles.container} ref={containerRef}>
      <PopOverAnimation
        placement={placement}
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
    </div>
  );
};

export default PopOver;
