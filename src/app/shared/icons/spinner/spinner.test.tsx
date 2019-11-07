import * as React from 'react';
import Lottie from 'react-lottie';
import LottiePlayer from 'lotty/lottiePlayer';
import { ReactWrapper, mount } from 'enzyme';
import Spinner from './spinner';

const setup = (): ReactWrapper => mount(<Spinner />);

describe('basic rendering', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test('component renders', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(LottiePlayer).length).toBe(1);
  });

  test('lottie player autoplays', () => {
    expect(wrapper.find(LottiePlayer).find(Lottie).prop('autoplay')).toBeTruthy();
    expect(wrapper.find(LottiePlayer).find(Lottie).prop('loop')).toBeTruthy();
  });
});
