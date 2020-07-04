import * as sizes from 'styles/_sizes.less';
import { PopOverProps, PopOverStyle } from 'types/modalTypes';
import { ClientRect } from 'types/htmlTypes';

export default (
  childrenRect: ClientRect,
  popOverRect: ClientRect,
  placement: PopOverProps['placement'],
  hasCaret: boolean,
): PopOverStyle => {
  const p = placement.split('-');
  const placementOne = p[0];
  const placementTwo = p[1];
  const style: PopOverStyle = {};

  console.log(' --- childrenRect ---');
  console.log(childrenRect); // todo: remove
  console.log(' --- popOverRect ---');
  console.log(popOverRect); // todo: remove

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
