import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const AboutIcon: React.FC<IndividualIconProps> = ({ color, size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <rect width="24" height="24" fill="none" rx="0" ry="0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM19.8 12C19.8 16.3078 16.3078 19.8 12 19.8C7.69218 19.8 4.2 16.3078 4.2 12C4.2 7.69218 7.69218 4.2 12 4.2C16.3078 4.2 19.8 7.69218 19.8 12ZM13 7V9H11V7H13ZM13 17V10H11V17H13Z"
      fill={colors[color]}
    />
  </svg>
);

export default AboutIcon;
