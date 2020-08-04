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
  defaultVisible?: boolean;
  delay?: number;
  trigger?: 'click' | 'hover';
}

const PopOver: React.FC<PopOverProps> = ({
  callback,
  children,
  defaultVisible = false,
  delay = null,
  trigger = 'click',
}) => {
  const [childrenRef, setChildrenRef] = React.useState<HTMLElement>(null);
  const [isVisible, setIsVisible] = React.useState<boolean>(defaultVisible);
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
    let timeout: NodeJS.Timeout = null;

    const handleClick = (event: Event): void => {
      if (!isVisible && childrenNode.contains(event.target as Node)) {
        if (delay) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        } else {
          setIsVisible(true);
        }
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

    const handleHover = (event: Event): void => {
      if (delay && childrenNode.contains(event.target as Node)) {
        timeout = setTimeout(() => setIsVisible(true), delay * 1000);
      } else if (childrenNode.contains(event.target as Node)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const hideMouseOut = (): void => {
      if (trigger === 'hover') {
        clearTimeout(timeout);
        setIsVisible(false);
      }
    };

    if (childrenNode) {
      if (trigger === 'click') {
        document.addEventListener('mousedown', handleClick);
      }

      if (trigger === 'hover') {
        childrenNode.addEventListener('mouseover', handleHover);
        childrenNode.addEventListener('mouseout', hideMouseOut);
      }
    }

    return () => {
      if (childrenNode) {
        if (trigger === 'click') {
          document.removeEventListener('mousedown', handleClick);
        }

        if (trigger === 'hover') {
          childrenNode.removeEventListener('mouseover', handleHover);
          childrenNode.removeEventListener('mouseout', hideMouseOut);
        }
      }
    };
  }, [
    childrenRef,
    delay,
    popOverRef,
    isVisible,
    setIsVisible,
    trigger,
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
