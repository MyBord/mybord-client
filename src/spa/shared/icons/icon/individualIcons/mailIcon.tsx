import * as React from 'react';
import * as colors from 'styles/_colors.less';

interface Props {
  color: string;
  size: number;
}

const MailIcon: React.FC<Props> = ({ color, size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill={colors[color]}>
      <path d="M33.933,37.5a4.006,4.006,0,0,1-3.867,0L2,22.017V51a6.006,6.006,0,0,0,6,6H56a6.006,6.006,0,0,0,6-6V22.017Z" fill={colors[color]} />
      <path d="M56,7H8a6.006,6.006,0,0,0-6,6v5a1,1,0,0,0,.517.876l29,16a1,1,0,0,0,.966,0l29-16A1,1,0,0,0,62,18V13A6.006,6.006,0,0,0,56,7Z" fill={colors[color]} />
    </g>
  </svg>
);

export default MailIcon;
