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
    // case 'left':
    //   style.right = '100%';
    //   style.marginRight = popOverMargin;
    //   break;
    // case 'right':
    //   style.left = '100%';
    //   style.marginLeft = popOverMargin;
    //   break;
    case 'top':
      style.top = `${childrenRect.top - popOverRect.height - popOverMargin}px`;
      // style.bottom = '100%';
      // style.marginBottom = popOverMargin;
      break;
    default:
      break;
  }

  if (placementTwo === 'center') {
    if (['bottom', 'top'].includes(placementOne)) {
      style.left = `${childrenRect.left + childrenRect.width / 2 - popOverRect.width / 2}px`;
    }

    // if (['left', 'right'].includes(placementOne)) {
    //   style.top = '50%';
    //   style.transform = 'translateY(-50%)';
  } else {
    // switch (placementTwo) {
    //   case 'bottom':
    //     break;
    //   case 'center':
    //     break;
    //   case 'left':
    //     break;
    //   case 'right':
    //     break;
    //   case 'top':
    //     break;
    //   default:
    //     break;
    // }
  }

  return style;
};
