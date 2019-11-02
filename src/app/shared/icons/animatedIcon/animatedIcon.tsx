import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import backAnimation from 'lotty/lotties/back.json';
import chartAnimation from 'lotty/lotties/chart.json';
import gearAnimation from 'lotty/lotties/gear.json';
import heartAnimation from 'lotty/lotties/heart.json';
import homeAnimation from 'lotty/lotties/home.json';
import userAnimation from 'lotty/lotties/user.json';

export const icons = {
  back: backAnimation,
  chart: chartAnimation,
  gear: gearAnimation,
  heart: heartAnimation,
  home: homeAnimation,
  user: userAnimation,
};

export type IconName = keyof typeof icons;

interface Props {
  iconName: IconName;
  isStopped: boolean;
  size: number;
}

const AnimatedIcon: React.FC<Props> = ({ iconName, isStopped, size }) => {
  const getAnimationData = (): any => {
    try {
      return icons[iconName];
    } catch {
      throw Error('Component: `AnimatedIcon` - iconName parameter is invalid');
    }
  };

  return (
    <LottiePlayer
      animationData={getAnimationData()}
      isStopped={isStopped}
      size={size}
    />
  );
};

export default AnimatedIcon;
