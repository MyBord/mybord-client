import * as React from 'react';
import * as colors from 'styles/_colors.less';

interface Props {
  color: string;
  size: number;
  strokeWidth: number;
}

const PaperAirplaneIcon: React.FC<Props> = ({ color, size, strokeWidth }) => (
  <svg height={size} width={size} viewBox="0 0 64 64">
    <g fill={colors[color]} stroke={colors[color]} strokeLinecap="square" strokeWidth={`${strokeWidth}`}>
      <polyline fill="none" points="60 5 17 36.244 17 58 27 51" strokeLinecap="butt" />
      <polygon fill="none" points="4 27 60 5 49 59 4 27" stroke={colors[color]} />
    </g>
  </svg>
);

export default PaperAirplaneIcon;
