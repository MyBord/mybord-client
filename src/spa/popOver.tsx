import * as React from 'react';
import Portal from './portal';

export interface PopOverCallback {
  hidePopOver: () => void;
  isVisible: boolean;
  showPopOver: () => void;
}

export interface PopOverProps {
  callback?: (props: PopOverCallback) => void;
  children: React.ReactElement;
}

const PopOver: React.FC<PopOverProps> = ({
  callback,
  children,
}) => {
  const [childrenRef, setChildrenRef] = React.useState<HTMLElement>(null);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const popOverRef = React.useRef<HTMLDivElement>(null);
  const newChildren = React.cloneElement(
    children,
    { ref: (node: HTMLElement) => setChildrenRef(node) },
  );

  // ----- CALLBACK ----- //
  // attaches callback functionality
  React.useEffect(() => {
    if (callback) {
      callback({
        hidePopOver: () => () => setIsVisible(false),
        isVisible,
        showPopOver: () => () => setIsVisible(true),
      });
    }
  }, [callback, isVisible]);

  // ----- CLICK & HOVER EVENT LISTENERS ----- //
  // adds a click or hover event listener to conditionally display the popover

  React.useEffect(() => {
    const childrenNode = childrenRef;
    const popOverNode = popOverRef.current;

    const handleClick = (event: Event): void => {
      if (!isVisible && childrenNode.contains(event.target as Node)) {
        setIsVisible(true);
      }

      if (isVisible && childrenNode.contains(event.target as Node)) {
        setIsVisible(false);
      }

      if (
        isVisible
        && popOverNode
        && !popOverNode.contains(event.target as Node)
        && !childrenNode.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    if (childrenNode) {
      document.addEventListener('mousedown', handleClick);
    }

    return () => {
      if (childrenNode) {
        document.removeEventListener('mousedown', handleClick);
      }
    };
  }, [
    childrenRef,
    popOverRef,
    isVisible,
    setIsVisible,
  ]);

  // ----- RETURNS COMPONENT ----- //

  return (
    <>
      {newChildren}
      <Portal>
        {
          isVisible && (
            <div
              style={{
                background: 'pink',
                padding: '1rem',
                position: 'absolute',
                right: '1rem',
                top: '1rem',
              }}
            >
              <h3>This is the popover content</h3>
            </div>
          )
        }
      </Portal>
    </>
  );
};

export default PopOver;
