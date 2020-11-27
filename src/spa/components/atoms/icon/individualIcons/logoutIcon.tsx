import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const LogoutIcon: React.FC<IndividualIconProps> = ({ color, size }) => (
  <svg height={size} width={size} viewBox="0 0 48 48">
    <g>
      <path
        d="M38,47H10c-0.552,0-1-0.448-1-1V2c0-0.552,0.448-1,1-1h28c0.552,0,1,0.448,1,1v6c0,0.552-0.448,1-1,1 s-1-0.448-1-1V3H11v42h26v-5c0-0.552,0.448-1,1-1s1,0.448,1,1v6C39,46.552,38.552,47,38,47z"
        fill={colors[color]}
      />
      <path
        d="M43.633,23.226l-11-9c-0.3-0.245-0.713-0.295-1.062-0.13C31.223,14.262,31,14.614,31,15v7H19 c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h12v7c0,0.386,0.223,0.738,0.572,0.904c0.349,0.165,0.762,0.115,1.062-0.13l11-9 C43.865,24.584,44,24.3,44,24S43.865,23.416,43.633,23.226z"
        fill={colors[color]}
      />
    </g>
  </svg>
);

export default LogoutIcon;
