import * as React from 'react';

interface Props {
  height?: number;
  width?: number;
}

const HamburgerButton: React.FC<Props> = ({ height = 60, width = 60 }) => (
  <svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <title>play to pause</title>
    <g fill="#111111" stroke="#111111" strokeLinecap="round" strokeWidth="2">
      <g className="nc-interact_play-pause-o-32">
        <rect className="nc-pause" height="26" width="7" fill="none" opacity="1" transform="translate(0 0)" x="20" y="3"/>
        <polygon fill="none" points="5 29 6 29 12 29 12 3 5 3 5 29" stroke="#111111" data-end="5 29 6 29 12 29 12 3 5 3 5 29"/>
      </g>
    </g>
  </svg>
);

export default HamburgerButton;
