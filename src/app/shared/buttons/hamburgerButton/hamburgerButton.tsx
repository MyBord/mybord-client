import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import animationData from 'lotty/lotties/hamburger.json';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const HamburgerButton: React.FC<Props> = ({ onClick }) => {
  const [isStopped, setStop] = React.useState(true);
  const [direction, setDirection] = React.useState(1);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    onClick(event);
    if (!isStopped) {
      setDirection(direction * -1);
    }
    setStop(false);
  };

  return (
    <button type="button" onClick={handleClick}>
      <LottiePlayer
        animationData={animationData}
        direction={direction}
        isStopped={isStopped}
        size={200}
      />
    </button>
  );
};

export default HamburgerButton;
