import * as React from 'react';
import * as colors from 'styles/_colors.less';

interface Props {
  color: string;
  size: number;
}

const FacebookIcon: React.FC<Props> = ({ color, size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill={colors[color]}>
      <path
        d="M62,32.18A30,30,0,1,0,27.312,61.816V40.851H19.7V32.18h7.616V25.57c0-7.519,4.48-11.672,11.331-11.672a46.208,46.208,0,0,1,6.716.585v7.384H41.576a4.339,4.339,0,0,0-4.889,4.688V32.18h8.322l-1.331,8.671H36.687V61.816A30,30,0,0,0,62,32.18Z"
        fill={colors[color]}
      />
    </g>
  </svg>
);

export default FacebookIcon;
