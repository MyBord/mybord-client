import * as React from 'react';
import PopOverAnimation from 'framerMotion/popOverAnimation';
import { PopOverProps } from 'types/modalTypes';
import * as styles from './popOver.module.less';

interface Props extends PopOverProps {
  Content: React.ReactNode;
  caretPosition?:
    'bottom-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'top-center'
    | 'top-left'
    | 'top-right';
  node: React.RefObject<HTMLElement>;
  onHide: () => void;
}

const PopOver: React.FC<Props> = ({
  Content,
  caretPosition = null,
  node,
  onHide,
  placement = 'right',
  position = { x: 0, y: 0 },
  show,
}) => {
  const popOverRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const buttonNode = node && node.current;
    const popOverNode = popOverRef.current;

    const handleClickOutside = (event: Event): void => {
      if (
        show
        && popOverNode
        && !popOverNode.contains(event.target as Node)
        && buttonNode
        && !buttonNode.contains(event.target as Node)
      ) {
        onHide();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [node, onHide, popOverRef, show]);

  return (
    <PopOverAnimation
      placement={placement}
      position={position}
      ref={popOverRef}
      show={show}
    >
      {
        caretPosition && (
          <div className={[
            styles.caret,
            styles[caretPosition.split('-')[0]],
            styles[caretPosition.split('-')[1]],
          ].join(' ')} />
        )
      }
      {Content}
    </PopOverAnimation>
  );
};

export default PopOver;
