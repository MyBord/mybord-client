import * as React from 'react';
import LottiePlayer from 'lottie/lottiePlayer';
import animationData from 'lottie/lotties/hamburger.json';
import useToggle from 'hooks/useToggle';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const HamburgerButton: React.FC<Props> = ({ onClick }) => {
  const [state, toggle] = useToggle();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    onClick(event);
    toggle();
  };

  return (
    <button
      onClick={handleClick}
      type="button"
    >
      {state ? 'ON' : 'OFF'}
      Click Me Hamburger
      <LottiePlayer
        animationData={animationData}
        size={200}
      />
    </button>
  );
};

export default HamburgerButton;
