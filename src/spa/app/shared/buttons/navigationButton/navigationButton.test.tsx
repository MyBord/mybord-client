import * as React from 'react';
import Lottie from 'react-lottie';
import { Link, MemoryRouter } from 'react-router-dom';
import { ReactWrapper, mount } from 'enzyme';
import AnimatedIcon from 'icons/animatedIcon/animatedIcon';
import LottiePlayer from 'lotty/lottiePlayer';
import Typography from 'shared/typography/typography';
import chartAnimation from 'lotty/lotties/chart.json';
import { AnimatedIconNames } from 'types/iconTypes';
import NavigationButton from './navigationButton';

const setup = (
  iconName: AnimatedIconNames, label: string, props?: object,
): ReactWrapper => mount(
  <MemoryRouter>
    <NavigationButton
      iconName={iconName}
      label={label}
      to="foo"
      {...props}
    />
  </MemoryRouter>,
);

describe('basic rendering', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = setup('chart', 'hello world');
  });

  test('component renders', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(Link).length).toBe(1);
  });

  test('animated icon renders, and with correct icon', () => {
    expect(wrapper.find(AnimatedIcon).length).toBe(1);
    expect(wrapper.find(AnimatedIcon).find(LottiePlayer).prop('animationData'))
      .toBe(chartAnimation);
  });

  test('label is rendered accurately', () => {
    expect(wrapper.find(Typography).length).toBe(1);
    expect(wrapper.find(Typography).text()).toBe('hello world');
  });
});

describe('functionality', () => {
  test('animated icon animates when button is hovered over', () => {
    const wrapper = setup('chart', 'hello world');
    expect(wrapper.find(AnimatedIcon).find(LottiePlayer).find(Lottie).prop('isStopped'))
      .toBeTruthy();
    wrapper.find(Link).simulate('mouseenter');
    expect(wrapper.find(AnimatedIcon).find(LottiePlayer).find(Lottie).prop('isStopped'))
      .toBeFalsy();
  });
});
