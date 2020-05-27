import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

// todo: remove color?

const CheckmarkIcon: React.FC<IndividualIconProps> = ({ color, size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill="#000000" stroke="#000000" strokeLinecap="square" strokeWidth="2">
      <polygon fill="none" points="24,54 4,34 12,26 24,38 52,10 60,18 " stroke="#000000"/>
    </g>
  </svg>
);

export default CheckmarkIcon;
