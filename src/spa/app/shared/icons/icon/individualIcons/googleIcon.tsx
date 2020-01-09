import * as React from 'react';

interface Props {
  size: number;
}

const GoogleIcon: React.FC<Props> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <title>google</title>
    <g fill="#ffffff">
      <path d="M59.808,26.727H32.126V38.591H47.814C45.308,46.5,39.114,49.136,32,49.136A17.136,17.136,0,1,1,43,18.88l8.621-8.21A28.993,28.993,0,1,0,32,61C47.991,61,62.444,50.455,59.808,26.727Z" fill="#ffffff"/>
    </g>
  </svg>
);

export default GoogleIcon;
