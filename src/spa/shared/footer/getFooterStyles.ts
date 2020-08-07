import * as React from 'react';
import * as sizes from 'styles/_sizes.less';
import { FooterHrStyle, FooterImgStyle } from 'types/footerTypes';
import { convertUnit, getUnit, makeUnit } from 'utils/cssUtils';

export const getHrStyles = (contentRef: React.RefObject<HTMLDivElement>): FooterHrStyle => {
  const listMargin = convertUnit(sizes.footerListMargin, 'rem', 'px');
  const footerMargin = getUnit(listMargin, 'px');

  const contentRect = contentRef.current.getBoundingClientRect();
  const width = makeUnit(contentRect.width - footerMargin, 'px');

  return {
    width,
  };
};

// don't always be in center if it is wider
export const getImgStyles = (
  contentRef: React.RefObject<HTMLDivElement>,
  sectionRef: React.RefObject<HTMLTableSectionElement>,
  isApp: boolean,
): FooterImgStyle => {
  const logoSize = convertUnit(sizes.footerLogoSize, 'rem', 'px');
  const logoSizeValue = getUnit(logoSize, 'px');

  const contentRect = contentRef.current.getBoundingClientRect();
  const sectionRect = sectionRef.current.getBoundingClientRect();

  const marginRight = isApp ? 96 : 32;

  let left: string;
  if (sectionRect.width >= 1400) {
    left = makeUnit(contentRect.left - logoSizeValue - marginRight, 'px');
  } else {
    left = makeUnit(contentRect.left / 2 - logoSizeValue / 2, 'px');
  }

  return {
    left,
  };
};
