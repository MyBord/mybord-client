import * as React from 'react';

export default (): [number, boolean, () => void] => {
  const [isStopped, setStop] = React.useState(true);
  const [direction, setDirection] = React.useState(1);

  const toggleLottie = (): void => {
    if (!isStopped) {
      setDirection(direction * -1);
    }
    setStop(false);
  };

  return [direction, isStopped, toggleLottie];
};
