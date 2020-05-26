import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const DotMenuIcon: React.FC<IndividualIconProps> = ({ color, size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill={colors[color]}>
      <circle cx="8" cy="32" fill={colors[color]} r="6" />
      <circle cx="32" cy="32" r="6" />
      <circle cx="56" cy="32" fill={colors[color]} r="6" />
    </g>
  </svg>
);

export default DotMenuIcon;
