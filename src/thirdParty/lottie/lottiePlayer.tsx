import * as React from 'react';
import Lottie from 'react-lottie';
import useToggle from 'hooks/useToggle';

interface Props {
  animationData: object;
  size: number;
}

const LottiePlayer: React.FC<Props> = ({ animationData, size }) => {
  const [isStopped, toggle] = useToggle(true);
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Lottie
        height={size}
        options={defaultOptions}
        isStopped={isStopped}
        width={size}
      />
      {isStopped ? 'TRUE' : 'FALSE'}
      <button type="button" onClick={toggle}>Click Me</button>
    </>
  );
};

export default LottiePlayer;
