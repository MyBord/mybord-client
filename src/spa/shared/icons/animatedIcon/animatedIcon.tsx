import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
const backAnimation = React.lazy(() => import('lotty/lotties/back.json'));
const chartAnimation = React.lazy(() => import('lotty/lotties/chart.json'));
const dashboardAnimation = React.lazy(() => import('lotty/lotties/dashboard.json'));
const gearAnimation = React.lazy(() => import('lotty/lotties/gear.json'));
const userAnimation = React.lazy(() => import('lotty/lotties/user.json'));

export const animatedIcons = {
  back: backAnimation,
  chart: chartAnimation,
  dashboard: dashboardAnimation,
  gear: gearAnimation,
  user: userAnimation,
};

// This type is recreated from `iconNameTypes.ts` in order to avoid a dependency cycle
export type AnimatedIconNames = keyof typeof animatedIcons;

interface Props {
  iconName: AnimatedIconNames;
  isPaused?: boolean;
  isStopped: boolean;
  size: number;
}

const AnimatedIcon: React.FC<Props> = ({
  iconName,
  isPaused = false,
  isStopped,
  size,
}) => {
  if (animatedIcons[iconName]) {
    return (
      <LottiePlayer
        animationData={animatedIcons[iconName]}
        isPaused={isPaused}
        isStopped={isStopped}
        size={size}
      />
    );
  }
  throw Error('Component: `AnimatedIcon` - iconName parameter is invalid');
};

export default AnimatedIcon;
