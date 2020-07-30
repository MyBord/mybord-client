import * as React from 'react';
import Portal from '../portal/portal';
import { PopOverProps, PopOverStyle } from 'types/modalTypes';
import getPopOverStyle from './getPopOverStyle';

const PopOver: React.FC<PopOverProps> = ({
  callback,
  caretPlacement = null,
  children,
  color = 'white',
  defaultVisible = false,
  delay = null,
  placement = 'bottom-center',
  position = null,
  trigger = 'click',
}) => {
  const [childrenRef, setChildrenRef] = React.useState<HTMLElement>(null);
  const [
    finalCaretPlacement,
    setFinalCaretPlacement,
  ] = React.useState<PopOverProps['caretPlacement']>(caretPlacement);
  const [popOverStyle, setPopOverStyle] = React.useState<PopOverStyle>(null);
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

  // ----- POPOVER STYLE  ----- //
  // sets the style and positioning of the popover, and updates said style and positioning if
  // the window gets resized.

  React.useEffect(() => {
    const getStyle = (): void => getPopOverStyle(
      finalCaretPlacement,
      childrenRef,
      placement,
      popOverRef,
      position,
      setFinalCaretPlacement,
      setPopOverStyle,
      window.innerHeight,
      window.innerWidth,
    );

    getStyle();

    window.addEventListener('resize', getStyle);

    return () => {
      window.removeEventListener('resize', getStyle);
    };
  }, [
    finalCaretPlacement,
    childrenRef,
    placement,
    popOverRef,
    position,
    isVisible,
  ]);

  // ----- RETURNS COMPONENT ----- //

  return (
    <>
      {newChildren}
      <Portal>
        {
          isVisible && (
            <div>
              <h3>This is the popover content</h3>
            </div>
          )
        }
      </Portal>
    </>
  );
};

export default PopOver;
