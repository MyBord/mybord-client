import * as React from 'react';
import { ExtraRefs, PopOverProps } from 'types/modalTypes';
import { SetState } from 'types/reactTypes';
import popOverHandleClick from './popOverHandleClick';

interface Props {
  childrenRef: HTMLElement;
  delay: PopOverProps['delay'];
  extraRefs: ExtraRefs;
  isVisible: boolean;
  popOverRef: React.RefObject<HTMLElement>;
  setIsVisible: SetState<boolean>;
  trigger: PopOverProps['trigger'];
}

interface ReturnFunctions {
  handleClick: (event: Event) => void;
  handleHover: (event: Event) => void;
  handleMouseOut: () => void;
}

export default ({
  childrenRef,
  delay,
  extraRefs,
  isVisible,
  popOverRef,
  setIsVisible,
  trigger,
}: Props): ReturnFunctions => {
  let timeout: NodeJS.Timeout = null;

  const handleClick = (event: Event): void => popOverHandleClick({
    childrenRef,
    delay,
    event,
    extraRefs,
    isVisible,
    popOverRef,
    setIsVisible,
  });

  const handleHover = (event: Event): void => {
    if (delay && childrenRef.contains(event.target as Node)) {
      timeout = setTimeout(() => setIsVisible(true), delay * 1000);
    } else if (childrenRef.contains(event.target as Node)) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleMouseOut = (): void => {
    if (trigger === 'hover') {
      clearTimeout(timeout);
      setIsVisible(false);
    }
  };

  return {
    handleClick,
    handleHover,
    handleMouseOut,
  };
};
