import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const WarningIcon: React.FC<IndividualIconProps> = ({ color, size, strokeWidth }) => (
  <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill={colors[color]} stroke={colors[color]} strokeWidth={`${strokeWidth}`}>
      <circle cx="32" cy="32" fill="none" r="29" stroke={colors[color]} strokeLinecap="square" />
      <line fill="none" strokeLinecap="square" x1="32" x2="32" y1="14" y2="39" />
      <circle cx="32" cy="47" fill="none" r="1" strokeLinecap="square" />
    </g>
  </svg>
);

export default WarningIcon;
