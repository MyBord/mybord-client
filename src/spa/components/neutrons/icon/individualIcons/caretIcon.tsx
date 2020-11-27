import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const CaretIcon: React.FC<IndividualIconProps> = ({ color, size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill={colors[color]}>
      <path d="M32,40c-0.512,0-1.024-0.195-1.414-0.586L17.171,26L20,23.171l12,12l12-12L46.829,26L33.414,39.414 C33.024,39.805,32.512,40,32,40z" fill={colors[color]} />
    </g>
  </svg>
);

export default CaretIcon;
