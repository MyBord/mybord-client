import * as React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import Icon, { IconName, icons } from './icon';

const setup = (iconName: IconName): ReactWrapper => mount(
  <Icon
    iconName={iconName}
    size={60}
  />,
);

describe('basic rendering', () => {
  const iconRenderTest = (iconName: IconName): void => test(`icon ${iconName} renders`, () => {
    expect(setup(iconName).find('svg').length).toBe(1);
  });

  Object.keys(icons).forEach((icon: IconName) => iconRenderTest(icon));
});

describe('conditional rendering', () => {
  test('error is thrown when an unexpected iconName is provided', () => {
    // @ts-ignore - let `setup` return a non `IconName` type value so we can assert an error.
    expect(() => setup('foo')).toThrow();
  });
});
