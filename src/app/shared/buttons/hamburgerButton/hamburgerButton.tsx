import * as React from 'react';
import LottiePlayer from 'lottie/lottiePlayer';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const HamburgerButton: React.FC<Props> = ({ onClick }) => (
  <button
    onClick={onClick}
    type="button"
  >
    Click Me Hamburger
    <LottiePlayer />
  </button>
);

export default HamburgerButton;
