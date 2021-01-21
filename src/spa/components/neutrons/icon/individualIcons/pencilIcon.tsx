import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const PencilIcon: React.FC<IndividualIconProps> = ({
  color,
  size,
  strokeWidth,
}) => (
  <svg height={size} width={size} fill="none" viewBox="0 0 24 24">
    <path
      clipRule="evenodd"
      d="M18.17 2.29L3.77 16.7L2 22L7.3 20.23L21.71 5.83C22.1 5.44 22.1 4.81 21.71 4.42L19.58 2.29C19.19 1.9 18.56 1.9 18.17 2.29Z"
      fill="none"
      fillRule="evenodd"
      stroke={colors[color]}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth={strokeWidth}
    />
    <path
      d="M19.23 8.30999L15.69 4.76999L18.16 2.29999C18.55 1.90999 19.18 1.90999 19.57 2.29999L21.7 4.42999C22.09 4.81999 22.09 5.44999 21.7 5.83999L19.23 8.30999Z"
      fill="none"
      stroke={colors[color]}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth={strokeWidth}
    />
  </svg>
);

export default PencilIcon;
