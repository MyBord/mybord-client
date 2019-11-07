import * as React from 'react';

interface Props {
  size: number;
}

const HouseIcon: React.FC<Props> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <title>property location</title>
    <g fill="#111111" stroke="#111111" strokeLinecap="round" strokeWidth="2">
      <polyline fill="none" points="2 28 32 4 62 28" stroke="#111111" />
      <polyline fill="none" points="10 30 10 60 38 60" stroke="#111111" />
      <circle cx="50" cy="43" fill="none" r="4" />
      <path d="M62,42.688C62,49.9,50,61,50,61S38,49.9,38,42.688C38,35.292,44.2,31,50,31S62,35.292,62,42.688Z" fill="none" />
    </g>
  </svg>
);

export default HouseIcon;
