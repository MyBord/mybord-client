import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import AnimatedIcon, { IconName } from 'icons/animatedIcon/animatedIcon';
import NavigationButton from './navigationButton';

const setup = (iconName: IconName, label: string, props: object): ShallowWrapper => shallow(
  <NavigationButton
    iconName={iconName}
    label={label}
    {...props}
  />,
);

describe('basic rendering', () => {
  test('component renders', () => {});
  test('animated icon renders', () => {});
  test('span does not render by default', () => {});
  test('label is rendered accurately', () => {});
  test('animated icon renders correct icon', () => {});
});

describe('conditional rendering', () => {
  test('span renders if `active=true`', () => {});
});

describe('functionality', () => {
  test('animated icon animates when button is hovered over', () => {});
});
