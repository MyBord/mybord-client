// This function takes the refs of the children and popOver nodes and based on their dimensions,
// returns the absolute positioning css style that the popOver should be set to.

import * as React from 'react';
import * as sizes from 'styles/_sizes.less';
import { PopOverProps, PopOverStyle } from 'types/modalTypes';
import { ClientRect } from 'types/htmlTypes';

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
  if (hasCaret) {
    const caretSize = sizes.caretSize.split('rem')[0] * 16;
    popOverMargin += caretSize;
  }

  switch (placementOne) {
    case 'bottom':
      style.top = `${childrenRect.bottom + popOverMargin}px`;
      break;
    case 'left':
      style.left = `${childrenRect.left - popOverRect.width - popOverMargin}px`;
      break;
    case 'right':
      style.left = `${childrenRect.right + popOverMargin}px`;
      break;
    case 'top':
      style.top = `${childrenRect.top - popOverRect.height - popOverMargin}px`;
      break;
    default:
      break;
  }

  if (placementTwo === 'center') {
    if (['bottom', 'top'].includes(placementOne)) {
      style.left = `${childrenRect.left + childrenRect.width / 2 - popOverRect.width / 2}px`;
    }

    if (['left', 'right'].includes(placementOne)) {
      style.top = `${childrenRect.top + childrenRect.height / 2 - popOverRect.height / 2}px`;
    }
  } else {
    switch (placementTwo) {
      case 'bottom':
        style.top = `${childrenRect.bottom - popOverRect.height}px`;
        break;
      case 'left':
        style.left = `${childrenRect.left}px`;
        break;
      case 'right':
        style.left = `${childrenRect.right - popOverRect.width}px`;
        break;
      case 'top':
        style.top = `${childrenRect.top}px`;
        break;
      default:
        break;
    }
  }

  return style;
};

const mutateStyle = (position: PopOverProps['position'], style: PopOverStyle): PopOverStyle => {
  const finalStyle = { ...style };
  if (position && (position.left || position.top)) {
    if (position.left) {
      finalStyle.left = `${Number(finalStyle.left.split('px')[0]) + position.left}px`;
    }
    if (position.top) {
      finalStyle.top = `${Number(finalStyle.top.split('px')[0]) + position.top}px`;
    }
    return finalStyle;
  }

  return finalStyle;
};

export default (
  caretPlacement: PopOverProps['caretPlacement'],
  childrenRef: HTMLElement,
  placement: PopOverProps['placement'],
  popOverRef: React.RefObject<HTMLDivElement>,
  position: PopOverProps['position'],
  setStyle: (style: PopOverStyle) => void,
): void => {
  if (childrenRef && popOverRef.current) {
    const childrenRect = childrenRef.getBoundingClientRect();
    const popOverRect = popOverRef.current.getBoundingClientRect();
    const style = getStyle(childrenRect, !!caretPlacement, placement, popOverRect);
    const mutatedStyle = mutateStyle(position, style);
    setStyle(mutatedStyle);
  }
};
