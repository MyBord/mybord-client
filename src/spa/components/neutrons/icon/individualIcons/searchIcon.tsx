import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const SearchIcon: React.FC<IndividualIconProps> = ({
  color,
  size,
  strokeWidth,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M9.5 17C13.6421 17 17 13.6421 17 9.5C17 5.35786 13.6421 2 9.5 2C5.35786 2 2 5.35786 2 9.5C2 13.6421 5.35786 17 9.5 17Z"
      fill="none"
      stroke={colors[color]}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
    <path
      d="M22 22L14.8 14.8"
      stroke={colors[color]}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </svg>
);

export default SearchIcon;
