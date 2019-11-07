import * as React from 'react';
import Lottie from 'react-lottie';
import { ReactWrapper, mount } from 'enzyme';
import LottiePlayer from 'lotty/lottiePlayer';
import HamburgerButton from './hamburgerButton';

const setup = (): ReactWrapper => mount(
  <HamburgerButton
    direction={2}
    isStopped={true}
    onClick={() => {}}
  />,
);

describe('basic rendering', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test('component renders', () => {
    expect(wrapper.length).toBe(1);
  });

  test('Lottie component renders', () => {
    expect(wrapper.find(LottiePlayer).length).toBe(1);
  });

  test('`direction` and `isStopped` are properly drilled', () => {
    expect(wrapper.find(LottiePlayer).find(Lottie).prop('direction')).toBe(2);
    expect(wrapper.find(LottiePlayer).find(Lottie).prop('isStopped')).toBeTruthy();
  })
});
