import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const SuccessIcon: React.FC<IndividualIconProps> = ({ color, size, strokeWidth }) => (
  <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill={colors[color]} stroke={colors[color]} strokeLinecap="square" strokeWidth={`${strokeWidth}`}>
      <polyline fill="none" points="18 34 26 42 46 22" />
      <circle cx="32" cy="32" fill="none" r="29" stroke={colors[color]} />
    </g>
  </svg>
);

export default SuccessIcon;
