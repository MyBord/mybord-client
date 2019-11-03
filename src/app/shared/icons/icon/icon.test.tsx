import * as React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import { IconNames } from 'types/iconTypes';
import Icon, { iconNames } from './icon';

const setup = (iconName: IconNames): ReactWrapper => mount(
  <Icon
    iconName={iconName}
    size={60}
  />,
);

describe('basic rendering', () => {
  const iconRenderTest = (iconName: IconNames): void => test(`icon ${iconName} renders`, () => {
    expect(setup(iconName).find('svg').length).toBe(1);
  });

  Object.keys(iconNames).forEach((iconName: IconNames) => iconRenderTest(iconName));
});

describe('conditional rendering', () => {
  test('error is thrown when an unexpected iconName is provided', () => {
    // @ts-ignore - let `setup` return a non `IconName` type value so we can assert an error.
    expect(() => setup('foo')).toThrow();
  });
});
