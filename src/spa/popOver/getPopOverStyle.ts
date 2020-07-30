// This function takes the refs of the children and popOver nodes and based on their dimensions,
// returns the absolute positioning css style that the popOver should be set to.

import * as React from 'react';
import * as sizes from 'styles/_sizes.less';
import { ClientRect } from 'types/htmlTypes';
import { PopOverProps, PopOverStyle } from 'types/modalTypes';
import { getUnit, pixelize } from 'utils/cssUtils';

const getStyle = (
  childrenRect: ClientRect,
  hasCaret: boolean,
  placement: PopOverProps['placement'],
  popOverRect: ClientRect,
): PopOverStyle => {
  const p = placement.split('-');
  const placementOne = p[0];
  const placementTwo = p[1];
  const style: PopOverStyle = { left: null, top: null };
  let popOverMargin = 8;

  // Add extra margin if the popover has a caret
  if (hasCaret) {
    const caretSize = sizes.caretSize.split('rem')[0] * 16;
    popOverMargin += caretSize;
  }

  // Position the popover according to its two placement properties

  switch (placementOne) {
    case 'bottom':
      style.top = pixelize(childrenRect.bottom + popOverMargin, 'px');
      break;
    case 'left':
      style.left = pixelize(childrenRect.left - popOverRect.width - popOverMargin, 'px');
      break;
    case 'right':
      style.left = pixelize(childrenRect.right + popOverMargin, 'px');
      break;
    case 'top':
      style.top = pixelize(childrenRect.top - popOverRect.height - popOverMargin, 'px');
      break;
    default:
      break;
  }

  if (placementTwo === 'center') {
    if (['bottom', 'top'].includes(placementOne)) {
      style.left = pixelize(
        childrenRect.left + childrenRect.width / 2 - popOverRect.width / 2,
        'px',
      );
    }

    if (['left', 'right'].includes(placementOne)) {
      style.top = pixelize(
        childrenRect.top + childrenRect.height / 2 - popOverRect.height / 2,
        'px',
      );
    }
  } else {
    switch (placementTwo) {
      case 'bottom':
        style.top = pixelize(childrenRect.bottom - popOverRect.height, 'px');
        break;
      case 'left':
        style.left = pixelize(childrenRect.left, 'px');
        break;
      case 'right':
        style.left = pixelize(childrenRect.right - popOverRect.width, 'px');
        break;
      case 'top':
        style.top = pixelize(childrenRect.top, 'px');
        break;
      default:
        break;
    }
  }

  return style;
};

const mutateStyle = (
  caretPlacement: PopOverProps['caretPlacement'],
  popOverRect: ClientRect,
  position: PopOverProps['position'],
  setCaretPlacement: (caretPlacement: PopOverProps['caretPlacement']) => void,
  style: PopOverStyle,
  windowHeight: number,
  windowWidth: number,
): PopOverStyle => {
  const finalStyle = { ...style };

  // move the popover by custom x y coordinates when provided via props
  if (position && (position.left || position.top)) {
    if (position.left) {
      finalStyle.left = pixelize(getUnit(finalStyle.left, 'px') + position.left, 'px');
    }
    if (position.top) {
      finalStyle.top = pixelize(getUnit(finalStyle.top, 'px') + position.top, 'px');
    }
    return finalStyle;
  }

  // If the popOver would overflow on the right side of the window, then instead remove its
  // left positioning and give it some right margin, and set the caret position to 'auto' if
  // the popover has a caret
  if (getUnit(finalStyle.left, 'px') + popOverRect.width >= windowWidth) {
    delete finalStyle.left;
    finalStyle.right = pixelize(16, 'px');
    if (caretPlacement) {
      setCaretPlacement('auto');
    }
  }

  // If the popover is too close to the top of the window, or above it, then move it down
  if (getUnit(finalStyle.top, 'px') < 16) {
    finalStyle.top = pixelize(16, 'px');
  }

  return finalStyle;
};

export default (
  caretPlacement: PopOverProps['caretPlacement'],
  childrenRef: HTMLElement,
  placement: PopOverProps['placement'],
  popOverRef: React.RefObject<HTMLDivElement>,
  position: PopOverProps['position'],
  setCaretPlacement: (caretPlacement: PopOverProps['caretPlacement']) => void,
  setStyle: (style: PopOverStyle) => void,
  windowHeight: number,
  windowWidth: number,
): void => {
  if (childrenRef && popOverRef.current) {
    // get the dimensions of the child and popover node
    const childrenRect = childrenRef.getBoundingClientRect();
    const popOverRect = popOverRef.current.getBoundingClientRect();

    // get the style that should be applied to the popover
    const style = getStyle(childrenRect, !!caretPlacement, placement, popOverRect);

    // update the style if necessary
    const mutatedStyle = mutateStyle(
      caretPlacement,
      popOverRect,
      position,
      setCaretPlacement,
      style,
      windowHeight,
      windowWidth,
    );

    // update the style to the component's state
    setStyle(mutatedStyle);
  }
};
