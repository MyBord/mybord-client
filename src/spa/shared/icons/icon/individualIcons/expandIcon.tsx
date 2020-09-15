import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const ExpandIcon: React.FC<IndividualIconProps> = ({
  color,
  size,
}) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill={colors[color]} stroke={colors[color]} strokeLinecap="square" strokeWidth="2">
      <polyline fill="none" points="5 21 5 5 21 5" stroke={colors[color]} />
      <polyline fill="none" points="43 5 59 5 59 21" />
      <polyline fill="none" points="59 43 59 59 43 59" stroke={colors[color]} />
      <polyline fill="none" points="21 59 5 59 5 43" />
    </g>
  </svg>
);

export default ExpandIcon;
