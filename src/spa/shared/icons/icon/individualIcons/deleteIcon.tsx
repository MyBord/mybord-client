import * as React from 'react';

interface Props {
  size: number;
}

const DeleteIcon: React.FC<Props> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill="#000000" stroke="#000000" strokeLinecap="square" strokeWidth="2">
      <polyline fill="none" points="22 12 22 3 42 3 42 12" stroke="#000000" />
      <path d="M53,26V56a5,5,0,0,1-5,5H16a5,5,0,0,1-5-5V26" fill="none" stroke="#000000" />
      <line fill="none" x1="32" x2="32" y1="31" y2="49" />
      <line fill="none" x1="22" x2="22" y1="31" y2="49" />
      <line fill="none" x1="42" x2="42" y1="31" y2="49" />
      <rect height="8" width="56" fill="none" stroke="#000000" x="4" y="12" />
    </g>
  </svg>
);

export default DeleteIcon;
