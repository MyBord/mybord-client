import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const CloseIcon: React.FC<IndividualIconProps> = ({ color, size, strokeWidth }) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill="#000000" stroke={colors[color]} strokeLinecap="square" strokeWidth={strokeWidth}>
      <line fill="none" stroke={colors[color]} x1="44" x2="20" y1="20" y2="44" />
      <line fill="none" stroke={colors[color]} x1="44" x2="20" y1="44" y2="20" />
    </g>
  </svg>
);

export default CloseIcon;
