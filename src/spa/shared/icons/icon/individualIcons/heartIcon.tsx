import * as React from 'react';

interface Props {
  size: number;
}

const HeartIcon: React.FC<Props> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill="#000000" stroke="#000000" strokeLinecap="square" strokeWidth="2">
      <path d="M44.693,5A15.027,15.027,0,0,0,32,11.89,15.027,15.027,0,0,0,19.307,5,15.337,15.337,0,0,0,4,20.455C4,35.817,32,59,32,59S60,35.817,60,20.455A15.337,15.337,0,0,0,44.693,5Z" fill="none" stroke="#000000" />
    </g>
  </svg>
);

export default HeartIcon;
