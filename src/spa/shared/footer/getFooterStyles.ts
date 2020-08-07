import * as React from 'react';
import * as sizes from 'styles/_sizes.less';
import { FooterHrStyle, FooterImgStyle } from 'types/footerTypes';
import { convertUnit, getUnit, makeUnit } from 'utils/cssUtils';

export const getHrStyles = (ref: React.RefObject<HTMLDivElement>): FooterHrStyle => {
  const listMargin = convertUnit(sizes.footerListMargin, 'rem', 'px');
  const footerMargin = getUnit(listMargin, 'px');
  const rect = ref.current.getBoundingClientRect();
  const width = makeUnit(rect.width - (footerMargin * 2), 'px');
  return {
    width,
  };
};

// don't always be in center if it is wider
export const getImgStyles = (ref: React.RefObject<HTMLDivElement>): FooterImgStyle => {
  const logoSize = convertUnit(sizes.footerLogoSize, 'rem', 'px');
  const logoWidthOffset = getUnit(logoSize, 'px') / 2;
  const rect = ref.current.getBoundingClientRect();
  const left = makeUnit(rect.left / 2 - logoWidthOffset, 'px');
  return {
    left,
  };
};
