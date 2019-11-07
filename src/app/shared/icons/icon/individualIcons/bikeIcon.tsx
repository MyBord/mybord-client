import * as React from 'react';

interface Props {
  size: number;
}

const BikeIcon: React.FC<Props> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <title>adaptive bike</title>
    <g fill="#111111" stroke="#111111" strokeLinecap="round" strokeWidth="2">
      <circle cx="19" cy="11" fill="none" r="6" stroke="#111111" />
      <path d="M15.7,35.353A10.785,10.785,0,0,0,13,35,11,11,0,1,0,23.476,49.337" fill="none" />
      <path d="M40.182,47.945A11,11,0,1,0,51,35c-.352,0-.7.02-1.044.053" fill="none" />
      <path d="M52.842,43.632l-9-7a3,3,0,0,0-2.724-.5L33.4,38.564,30,30.63l2.891,1.156A3,3,0,0,0,34,32a3.038,3.038,0,0,0,.521-.045l9.413-2a2.494,2.494,0,1,0-.868-4.912L34.32,25.9l-9.628-3.588A4.986,4.986,0,0,0,18.4,28.97l6,14a4.888,4.888,0,0,0,6.03,2.793l10.957-3.437,7.767,6.042a3,3,0,1,0,3.684-4.736Z" fill="none" stroke="#111111" />
    </g>
  </svg>
);

export default BikeIcon;
