import * as React from 'react';

interface Props {
  size: number;
}

const ChartIcon: React.FC<Props> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <title>g chart</title>
    <g fill="#565e5f" stroke="#565e5f" strokeLinecap="square" strokeWidth="2">
      <rect height="16" width="12" fill="none" stroke="#565e5f" x="5" y="43" />
      <rect height="35" width="12" fill="none" x="25" y="24" />
      <rect height="54" width="12" fill="none" stroke="#565e5f" x="47" y="5" />
    </g>
  </svg>
);

export default ChartIcon;
