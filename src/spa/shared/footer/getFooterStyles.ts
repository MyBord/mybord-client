import * as React from 'react';
import { FooterHrStyle, FooterImgStyle } from 'types/footerTypes';
import { makeUnit } from 'utils/cssUtils';
import * as sizes from 'styles/_sizes.less';

// make 96 an export
export const getHrStyles = (ref: React.RefObject<HTMLDivElement>): FooterHrStyle => {
  // console.log(sizes.footerListMargin);
  const rect = ref.current.getBoundingClientRect();
  const width = makeUnit(rect.width - 96, 'px');
  return {
    width,
  };
};

// don't always be in center if it is wider
// make 16 an export
export const getImgStyles = (ref: React.RefObject<HTMLDivElement>): FooterImgStyle => {
  const rect = ref.current.getBoundingClientRect();
  const left = makeUnit(rect.left / 2 - 16, 'px');
  return {
    left,
  };
};
