import * as sizes from 'styles/_sizes.less';
import { PopOverProps, PopOverStyle } from 'types/modalTypes';

export default (
  hasCaret: boolean,
  placement: PopOverProps['placement'],
): PopOverStyle => {
  const p = placement.split('-');
  const placementOne = p[0];
  const placementTwo = p[1];
  const style: PopOverStyle = {};

  let popOverMargin: string;
  if (hasCaret) {
    popOverMargin = `calc(0.5rem + ${sizes.caretSize})`;
  } else {
    popOverMargin = '0.5rem';
  }

  switch (placementOne) {
    case 'bottom':
      style.top = '100%';
      style.marginTop = popOverMargin;
      break;
    case 'left':
      style.right = '100%';
      style.marginRight = popOverMargin;
      break;
    case 'right':
      style.left = '100%';
      style.marginLeft = popOverMargin;
      break;
    case 'top':
      style.bottom = '100%';
      style.marginBottom = popOverMargin;
      break;
    default:
      break;
  }

  if (placementTwo === 'center') {
    if (['bottom', 'top'].includes(placementOne)) {
      style.left = '50%';
      style.transform = 'translateX(-50%)';
    }

    if (['left', 'right'].includes(placementOne)) {
      style.top = '50%';
      style.transform = 'translateY(-50%)';
    }
  } else {
    // @ts-ignore
    style[placementTwo] = '0';
  }

  return style;
};
