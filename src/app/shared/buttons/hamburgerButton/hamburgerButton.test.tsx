import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import LottiePlayer from 'lotty/lottiePlayer';
import HamburgerButton from './hamburgerButton';

const setup = (): ShallowWrapper => shallow(
  <HamburgerButton onClick={() => {}} />,
);

describe('basic rendering', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test('component renders', () => {
    expect(wrapper.length).toBe(1);
  });

  test('Lottie component renders', () => {
    expect(wrapper.find(LottiePlayer).length).toBe(1);
  });
});
