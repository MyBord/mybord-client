import * as React from 'react';
import * as colors from 'styles/_colors.less';

interface Props {
  color: string;
  size: number;
}

const MailIcon: React.FC<Props> = ({ color, size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill={colors[color]} stroke={colors[color]} strokeLinecap="square" strokeWidth="2">
      <polyline fill="none" points="4.467 9.467 33 35 59.508 9.439" strokeLinecap="butt" />
      <path d="M3,13V51a5,5,0,0,0,5,5H56a5,5,0,0,0,5-5V13a5,5,0,0,0-5-5H8A5,5,0,0,0,3,13Z" fill="none" stroke={colors[color]} />
    </g>
  </svg>
);

export default MailIcon;
