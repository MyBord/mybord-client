import * as React from 'react';

interface Props {
  size: number;
}

const MailIcon: React.FC<Props> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <title>mail</title>
    <g fill="#565e5f" stroke="#565e5f" strokeLinecap="square" strokeWidth="2">
      <polyline fill="none" points="4.467 9.467 33 35 59.508 9.439" strokeLinecap="butt" />
      <path d="M3,13V51a5,5,0,0,0,5,5H56a5,5,0,0,0,5-5V13a5,5,0,0,0-5-5H8A5,5,0,0,0,3,13Z" fill="none" stroke="#565e5f" />
    </g>
  </svg>
);

export default MailIcon;
