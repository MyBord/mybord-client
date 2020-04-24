import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const AboutIcon: React.FC<IndividualIconProps> = ({ color, size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill={colors[color]} stroke={colors[color]} strokeLinecap="square" strokeWidth="4">
      <circle cx="32" cy="32" fill="none" r="29" stroke={colors[color]} />
      <circle cx="32" cy="16" fill="none" r="1" />
      <line fill="none" x1="32" x2="32" y1="25" y2="48" />
    </g>
  </svg>
);

export default AboutIcon;
