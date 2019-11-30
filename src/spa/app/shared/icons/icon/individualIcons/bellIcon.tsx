import * as React from 'react';

interface Props {
  size: number;
}

const BellIcon: React.FC<Props> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <title>alarm</title>
    <g fill="#565e5f" stroke="#565e5f" strokeLinecap="square" strokeWidth="2">
      <path d="M57,51s-7-9-7-17V20A18,18,0,0,0,32,2h0A18,18,0,0,0,14,20V34c0,8-7,17-7,17Z" fill="none" stroke="#565e5f" />
      <path d="M38,56a6,6,0,0,1-12,0" fill="none" />
    </g>
  </svg>
);

export default BellIcon;
