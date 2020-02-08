import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const WarningIcon: React.FC<IndividualIconProps> = ({ color, size, strokeWidth }) => (
  <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <title>c warning</title>
    <g fill={colors[color]} stroke={colors[color]} strokeWidth={`${strokeWidth}`}>
      <circle cx="32" cy="32" fill="none" r="29" stroke={colors[color]} strokeLinecap="square" />
      <line fill="none" strokeLinecap="square" x1="32" x2="32" y1="14" y2="39" />
      <circle cx="32" cy="47" fill="none" r="1" strokeLinecap="square" />
    </g>
  </svg>
);

export default WarningIcon;

// const WarningIcon: React.FC<Props> = ({ size }) => (
//   <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
//     <title>c warning</title>
//     <g fill={colors.orange}>
//       <path d="M32,2A30,30,0,1,0,62,32,30.034,30.034,0,0,0,32,2Zm2.621,11-1.31,26.862H30.69L29.379,13ZM32,51a3,3,0,1,1,3-3A3,3,0,0,1,32,51Z" fill={colors.orange} />
//     </g>
//   </svg>
// );

// export default WarningIcon;
