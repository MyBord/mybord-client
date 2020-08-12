import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const CaretIcon: React.FC<IndividualIconProps> = ({ color, size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill={colors[color]}>
      <path d="M32,40c-0.512,0-1.024-0.195-1.414-0.586L17.171,26L20,23.171l12,12l12-12L46.829,26L33.414,39.414 C33.024,39.805,32.512,40,32,40z" fill={colors[color]} />
    </g>
  </svg>
);

export default CaretIcon;
// <g fill="#000000" stroke="#000000" strokeLinecap="square" strokeWidth="2">
//   <polyline fill="none" points="44,26 32,38 20,26 " stroke="#000000"/>
// </g>

// <g fill="#000000" stroke="#000000" strokeLinecap="square" strokeWidth="2">
//   <polyline fill="none" points="60,18 32,46 4,18 " stroke="#000000"/>
// </g>

// <g fill="#000000">
//   <path d="M60.893,12.549C60.723,12.212,60.377,12,60,12H4c-0.377,0-0.723,0.212-0.893,0.549 c-0.17,0.337-0.137,0.741,0.088,1.044l28,38C31.384,51.849,31.683,52,32,52s0.616-0.151,0.805-0.407l28-38 C61.029,13.29,61.062,12.886,60.893,12.549z" fill="#000000"/>
// </g>

// <g fill="#000000">
//   <path d="M32,40c-0.512,0-1.024-0.195-1.414-0.586L17.171,26L20,23.171l12,12l12-12L46.829,26L33.414,39.414 C33.024,39.805,32.512,40,32,40z" fill="#000000"/>
// </g>

// <g fill="#000000">
//   <path d="M32,43.171L5.414,16.586l-2.828,2.828l28,28C30.977,47.805,31.488,48,32,48s1.023-0.195,1.414-0.586l28-28 l-2.828-2.828L32,43.171z" fill="#000000"/>
// </g>
