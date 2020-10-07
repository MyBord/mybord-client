import * as React from 'react';

interface Props {
  size: number;
}

const UserDashboardIcon: React.FC<Props> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <title>layout 11</title>
    <g fill="#565e5f" stroke="#565e5f" strokeLinecap="square" strokeWidth="2">
      <rect height="34" width="22" fill="none" stroke="#565e5f" x="6" y="2" />
      <rect height="18" width="22" fill="none" x="6" y="44" />
      <rect height="18" width="22" fill="none" x="36" y="2" />
      <rect height="34" width="22" fill="none" stroke="#565e5f" x="36" y="28" />
    </g>
  </svg>
);

export default UserDashboardIcon;
