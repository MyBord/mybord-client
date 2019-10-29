import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import LottiePlayer from './lottiePlayer';

const setup = (): ShallowWrapper => shallow(
  <LottiePlayer animationData={{}} size={20} />,
);

describe('basic rendering', () => {
  test('Lottie component renders', () => {
    expect(setup().length).toBe(1);
  });
});
