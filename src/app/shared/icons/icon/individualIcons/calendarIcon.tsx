import * as React from 'react';

interface Props {
  size: number;
}

const CalendarIcon: React.FC<Props> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <title>calendar 2</title>
    <g fill="#565e5f" stroke="#565e5f" strokeLinecap="round" strokeWidth="2">
      <line fill="none" x1="61" x2="3" y1="22" y2="22" />
      <rect height="48" width="58" fill="none" rx="5" stroke="#565e5f" x="3" y="8" />
      <line fill="none" x1="17" x2="17" y1="2" y2="14" />
      <line fill="none" x1="47" x2="47" y1="2" y2="14" />
    </g>
  </svg>
);

export default CalendarIcon;
