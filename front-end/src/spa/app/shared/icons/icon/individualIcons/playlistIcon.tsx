import * as React from 'react';

interface Props {
  size: number;
}

const PlaylistIcon: React.FC<Props> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <title>video playlist</title>
    <g fill="#565e5f" stroke="#565e5f" strokeLinecap="square" strokeWidth="2">
      <line fill="none" stroke="#565e5f" x1="11" x2="53" y1="12" y2="12" />
      <line fill="none" stroke="#565e5f" x1="17" x2="47" y1="6" y2="6" />
      <rect height="40" width="56" fill="none" rx="5" stroke="#565e5f" x="4" y="18" />
      <polygon fill="none" points="28 30 40 38 28 46 28 30" />
    </g>
  </svg>
);

export default PlaylistIcon;
