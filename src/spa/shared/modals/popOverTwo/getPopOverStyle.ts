import * as sizes from 'styles/_sizes.less';
import { PopOverProps, PopOverStyle } from 'types/modalTypes';
import { ClientRect } from 'types/htmlTypes';

export default (
  clientRect: ClientRect,
): PopOverStyle => {
  const style: PopOverStyle = {};
  style.top = `${clientRect.y}px`;
  style.left = `${clientRect.x}px`;

  return style;
};
