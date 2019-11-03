import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import backAnimation from 'lotty/lotties/back.json';
import chartAnimation from 'lotty/lotties/chart.json';
import dashboardAnimation from 'lotty/lotties/dashboard.json';
import gearAnimation from 'lotty/lotties/gear.json';
import userAnimation from 'lotty/lotties/user.json';

export const icons = {
  back: backAnimation,
  chart: chartAnimation,
  dashboard: dashboardAnimation,
  gear: gearAnimation,
  user: userAnimation,
};

export type IconName = keyof typeof icons;

interface Props {
  iconName: IconName;
  isPaused?: boolean;
  isStopped: boolean;
  size: number;
}

const AnimatedIcon: React.FC<Props> = ({
  iconName, isPaused = false, isStopped, size,
}) => {
  if (icons[iconName]) {
    return (
      <LottiePlayer
        animationData={icons[iconName]}
        isPaused={isPaused}
        isStopped={isStopped}
        size={size}
      />
    );
  }
  throw Error('Component: `AnimatedIcon` - iconName parameter is invalid');
};

export default AnimatedIcon;
