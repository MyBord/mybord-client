import * as React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import LottiePlayer from 'lotty/lottiePlayer';
import AnimatedIcon, { IconName, icons } from './animatedIcon';

const setup = (iconName: IconName): ReactWrapper => mount(
  <AnimatedIcon
    iconName={iconName}
    isStopped={false}
    size={60}
  />,
);

describe('basic rendering', () => {
  const iconRenderTest = (iconName: IconName): void => test(`icon ${iconName} renders`, () => {
    expect(setup(iconName).find(LottiePlayer).length).toBe(1);
  });

  Object.keys(icons).forEach((icon: IconName) => iconRenderTest(icon));
});

describe('conditional rendering', () => {
  test('error is thrown when an unexpected iconName is provided', () => {
    // @ts-ignore - let `setup` return a non `IconName` type value so we can assert an error.
    expect(() => setup('foo')).toThrow();
  });
});
