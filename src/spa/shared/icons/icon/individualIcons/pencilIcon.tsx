import * as React from 'react';

interface Props {
  size: number;
}

const PencilIcon: React.FC<Props> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill="#000000" stroke="#000000" strokeLinecap="square" strokeWidth="2">
      <line fill="none" strokeLinecap="butt" x1="42" x2="54" y1="10" y2="22" />
      <path d="M21,55,4,60,9,43,46.828,5.172a4,4,0,0,1,5.657,0l6.343,6.343a4,4,0,0,1,0,5.657Z" fill="none" stroke="#000000" />
    </g>
  </svg>
);

export default PencilIcon;
