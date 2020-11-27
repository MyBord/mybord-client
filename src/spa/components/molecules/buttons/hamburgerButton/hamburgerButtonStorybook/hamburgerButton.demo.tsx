import * as React from 'react';
import { action } from '@storybook/addon-actions';
import useToggleLottie from 'hooks/useToggleLottie';
import HamburgerButton from '../hamburgerButton';

const HamburgerButtonDemo: React.FC = () => {
  const [direction, isStopped, toggleLottie] = useToggleLottie();
  const onClick = (): void => {
    toggleLottie();
    action('clicked');
  };
  return (
    <HamburgerButton
      direction={direction}
      isStopped={isStopped}
      onClick={onClick}
    />
  )
};

export default HamburgerButtonDemo;
