import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const CheckmarkIcon: React.FC<IndividualIconProps> = ({
  color,
  size,
  strokeWidth,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M2 12.74L8.13 18.87"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth={strokeWidth}
      stroke={colors[color]}
    />
    <path
      d="M8.13 18.87L22 5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth={strokeWidth}
      stroke={colors[color]}
    />
  </svg>
);

export default CheckmarkIcon;
