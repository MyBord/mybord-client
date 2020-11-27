import * as React from 'react';
import { ExtraRefs, PopOverProps } from 'types/modalTypes';
import { SetState } from 'types/reactTypes';

interface Props {
  childrenRef: HTMLElement;
  delay: PopOverProps['delay'];
  event: Event;
  extraRefs: ExtraRefs;
  isVisible: boolean;
  popOverRef: React.RefObject<HTMLElement>;
  setIsVisible: SetState<boolean>;
}

export default ({
  childrenRef,
  delay,
  event,
  extraRefs,
  isVisible,
  popOverRef,
  setIsVisible,
}: Props): void => {
  const childrenNode = childrenRef;
  const popOverNode = popOverRef.current;

  // The popover is currently closed but is then clicked, thus opening the popOver
  const clickToOpen = !isVisible && childrenNode.contains(event.target as Node);

  // The popover is currently open but is then clicked, thus closing the popOver
  const clickToClose = isVisible && childrenNode.contains(event.target as Node);

  // Is at least one of the extra refs clicked
  const extraRefsClicked = extraRefs.some((extraRef) => {
    if (extraRef && extraRef.current) {
      const { current } = extraRef;

      // This is how we evaluate if an extra ref is clicked if that extra ref is an rcSelect
      // dropdown component
      if (current.rcSelect) {
        const popupNode = current.rcSelect.getPopupDOMNode();
        return popupNode && popupNode.contains(event.target as Node);
      }

      return current.contains && current.contains(event.target as Node);
    }

    return false;
  });

  // The popover is currently open but the user clicks anywhere besides the content of the
  // popOver or any child refs, thus closing the popOver
  const clickOutsideToClose = isVisible
    && popOverNode
    && !extraRefsClicked
    && !popOverNode.contains(event.target as Node)
    && !childrenNode.contains(event.target as Node);


  if (clickToOpen) {
    if (delay) {
      setTimeout(() => setIsVisible(true), delay * 1000);
    } else {
      setIsVisible(true);
    }
  }

  if (clickToClose) {
    setIsVisible(false);
  }

  if (clickOutsideToClose) {
    setIsVisible(false);
  }
};
