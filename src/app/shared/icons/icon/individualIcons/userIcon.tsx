import * as React from 'react';

interface Props {
  size: number;
}

const UserIcon: React.FC<Props> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
    <title>single 01</title>
    <g fill="#111111" stroke="#111111" strokeWidth="1">
      <circle cx="6" cy="3" fill="none" r="2.5" strokeLinecap="round" />
      <path d="M6,7.5c-3.038,0-4.5,1.895-4.5,3v1h9v-1C10.5,9.4,9.038,7.5,6,7.5Z" fill="none" stroke="#111111" strokeLinecap="round"/>
    </g>
  </svg>
);

export default UserIcon;
