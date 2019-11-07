import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Lottie from 'react-lottie';
import LottiePlayer from './lottiePlayer';

const setup = (): ShallowWrapper => shallow(
  <LottiePlayer animationData={{}} size={20} />,
);

describe('basic rendering', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test('Lottie component renders', () => {
    expect(wrapper.length).toBe(1);
  });

  test('react-lottie api renders', () => {
    expect(wrapper.find(Lottie).length).toBe(1);
  });
});
