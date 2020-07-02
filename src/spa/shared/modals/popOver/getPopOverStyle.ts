import * as sizes from 'styles/_sizes.less';
import { PopOverProps, PopOverStyle } from 'types/modalTypes';
import { capitalize } from 'utils/language';

export default (
  height: number,
  width: number,
  placement: PopOverProps['placement'],
  hasCaret: boolean,
): PopOverStyle => {
  const p = placement.split('-');
  const placementOne = p[0];
  const placementTwo = p[1];
  const style: PopOverStyle = {};

  let popOverMargin: string;
  if (hasCaret) {
    popOverMargin = `calc(-0.5rem - ${sizes.caretSize})`;
  } else {
    popOverMargin = '-0.5rem';
  }

  // @ts-ignore
  style[placementOne] = `-${height}px`;
  // @ts-ignore
  style[`margin${capitalize(placementOne)}`] = popOverMargin;

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
