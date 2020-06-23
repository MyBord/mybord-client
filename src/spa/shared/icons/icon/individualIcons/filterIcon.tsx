import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const FilterIcon: React.FC<IndividualIconProps> = ({
  color,
  size,
}) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill={colors[color]} stroke={colors[color]} strokeLinecap="square" strokeWidth="2">
      <line fill="none" stroke={colors[color]} x1="34" x2="61" y1="12" y2="12" />
      <line fill="none" stroke={colors[color]} x1="3" x2="12" y1="12" y2="12" />
      <circle cx="20" cy="12" fill="none" r="8" stroke={colors[color]} />
      <line fill="none" stroke={colors[color]} x1="34" x2="61" y1="52" y2="52" />
      <line fill="none" stroke={colors[color]} x1="3" x2="12" y1="52" y2="52" />
      <circle cx="20" cy="52" fill="none" r="8" stroke={colors[color]} />
      <line fill="none" x1="3" x2="30" y1="32" y2="32" />
      <line fill="none" x1="52" x2="61" y1="32" y2="32" />
      <circle cx="44" cy="32" fill="none" r="8" />
    </g>
  </svg>
);

export default FilterIcon;
