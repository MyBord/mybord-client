import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const DeleteIcon: React.FC<IndividualIconProps> = ({ color, fill, size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill={colors[fill]} stroke={colors[color]} strokeLinecap="square" strokeWidth="2">
      <path d="M22,13V6a3,3,0,0,1,3-3H39a3,3,0,0,1,3,3v7" fill="none" />
      <line fill="none" x1="60" x2="4" y1="13" y2="13" />
      <path
        d="M53,19,50.332,56.356A5,5,0,0,1,45.344,61H18.656a5,5,0,0,1-4.988-4.644L11,19"
        fill={colors[fill]}
        stroke={colors[color]}
      />
    </g>
  </svg>
);

export default DeleteIcon;
