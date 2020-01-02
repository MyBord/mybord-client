import * as React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import LottiePlayer from 'lotty/lottiePlayer';
import { AnimatedIconNames } from 'types/iconTypes';
import AnimatedIcon, { animatedIcons } from './animatedIcon';

const setup = (iconName: AnimatedIconNames): ReactWrapper => mount(
  <AnimatedIcon
    iconName={iconName}
    isStopped={false}
    size={60}
  />,
);

describe('basic rendering', () => {
  const iconRenderTest = (iconName: AnimatedIconNames): void => test(`icon ${iconName} renders`, () => {
    expect(setup(iconName).find(LottiePlayer).length).toBe(1);
  });

  Object.keys(animatedIcons).forEach((icon: AnimatedIconNames) => iconRenderTest(icon));
});

describe('conditional rendering', () => {
  test('error is thrown when an unexpected iconName is provided', () => {
    // @ts-ignore - let `setup` return a non `IconName` type value so we can assert an error.
    expect(() => setup('foo')).toThrow();
  });
});
