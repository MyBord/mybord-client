import * as React from 'react';
import * as colors from 'styles/_colors.less';

interface Props {
  color: string;
  size: number;
}

const CopyrightIcon: React.FC<Props> = ({ color, size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill={colors[color]}>
      <path d="M32,62A30,30,0,1,1,62,32,30.034,30.034,0,0,1,32,62ZM32,7A25,25,0,1,0,57,32,25.028,25.028,0,0,0,32,7Z" fill={colors[color]} />
      <path d="M32.667,21a10.207,10.207,0,0,1,4.646,1.008l2.678,1.352L42.7,18.006l-2.676-1.354A16.157,16.157,0,0,0,32.667,15C22.856,15,17,21.355,17,32s5.856,17,15.667,17a16.157,16.157,0,0,0,7.354-1.652L42.7,45.994,39.991,40.64l-2.678,1.352A10.207,10.207,0,0,1,32.667,43C26.253,43,23,39.3,23,32S26.253,21,32.667,21Z" />
    </g>
  </svg>
);

export default CopyrightIcon;
