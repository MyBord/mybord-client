import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const LogoutIcon: React.FC<IndividualIconProps> = ({ color, size }) => (
  <svg width={size} height={size}>
    <rect width="24" height="24" fill="none" rx="0" ry="0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM19.8 12C19.8 16.3078 16.3078 19.8 12 19.8C7.69218 19.8 4.2 16.3078 4.2 12C4.2 7.69218 7.69218 4.2 12 4.2C16.3078 4.2 19.8 7.69218 19.8 12ZM12 17C14.7614 17 17 14.7614 17 12C17 9.94968 15.7659 8.1876 14 7.41604V9.12734C14.9067 9.75982 15.5 10.8106 15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.8106 9.09326 9.75982 10 9.12734V7.41604C8.2341 8.1876 7 9.94968 7 12C7 14.7614 9.23858 17 12 17ZM12 6C11.5582 6 11.2 6.35817 11.2 6.8V9.2C11.2 9.64183 11.5582 10 12 10C12.4418 10 12.8 9.64183 12.8 9.2V6.8C12.8 6.35817 12.4418 6 12 6Z"
      fill={colors[color]}
    />
  </svg>
);

export default LogoutIcon;
