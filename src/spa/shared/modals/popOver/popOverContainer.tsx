import * as React from 'react';
import { PopOverProps } from 'types/modalTypes';
import PopOverComponent from './popOverComponent';

interface Props extends PopOverProps {
  Content: React.ReactNode;
}

const PopOverContainer: React.FC<Props> = ({
  Content,
  caretPlacement = null,
  children,
  defaultVisible = false,
  placement = 'top-center',
  trigger = 'click',
}) => {
  const [showPopOver, setShowPopOver] = React.useState<boolean>(defaultVisible);
  const childrenRef = React.useRef<HTMLDivElement>(null);
  const popOverRef = React.useRef<HTMLDivElement>(null);

  // ----- ADDS CLICK OR HOVER EVENT LISTENERS TO CONDITIONALLY DISPLAY THE POPOVER ----- //

  React.useEffect(() => {
    const childrenNode = childrenRef.current;
    const popOverNode = popOverRef.current;

    const handleEvent = (event: Event): void => {
      if (
        !showPopOver
        && childrenNode
        && childrenNode.contains(event.target as Node)
      ) {
        setShowPopOver(true);
      }

      if (
        showPopOver
        && trigger === 'click'
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

    if (trigger === 'click') {
      document.addEventListener('mousedown', handleEvent);
    }

    if (trigger === 'hover') {
      document.addEventListener('mouseover', handleEvent);
    }

    return () => {
      if (trigger === 'click') {
        document.removeEventListener('mousedown', handleEvent);
      }

      if (trigger === 'hover') {
        document.removeEventListener('mouseover', handleEvent);
      }
    };
  }, [
    childrenRef,
    popOverRef,
    showPopOver,
    setShowPopOver,
    trigger,
  ]);

  // ----- RETURNS COMPONENT ----- //

  return (
    <PopOverComponent
      Content={Content}
      caretPlacement={caretPlacement}
      childrenRef={childrenRef}
      placement={placement}
      popOverRef={popOverRef}
      showPopOver={showPopOver}
    >
      {children}
    </PopOverComponent>
  );
};

export default PopOverContainer;
