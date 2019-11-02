import * as React from 'react';
import {
  ReactWrapper, ShallowWrapper, mount, shallow,
} from 'enzyme';
import { act } from 'react-dom/test-utils';
import { motion } from 'framer-motion';
import HamburgerButton from 'buttons/hamburgerButton/hamburgerButton';
import Navigation from './navigation';

const setupShallow = (): ShallowWrapper => shallow(<Navigation />);
const setupMount = (): ReactWrapper => mount(<Navigation />);

describe('basic rendering', () => {
  test('component renders', () => {
    expect(setupShallow().length).toBe(1);
  });

  test('navigation is collapsed by default', () => {
    expect(setupShallow().prop('animate')).toBe('collapsed');
  });

  test('hamburger button renders', () => {
    expect(setupShallow().find(HamburgerButton).length).toBe(1);
  });

  test('mousedown event listener is added on mount and removed on unmount', () => {
    // mocking event listeners and setting up wrapper.
    const map: { [key: string]: EventListenerOrEventListenerObject } = {};
    document.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });
    document.removeEventListener = jest.fn((event) => {
      delete map[event];
    });
    const wrapper = setupMount();

    // expecting specific listener to be instantiated, and then removed on unmount.
    expect(typeof map.mousedown).toBe('function');
    wrapper.unmount();
    expect(map.mousedown).toBeUndefined();
  });
});

describe('functionality', () => {
  test('clicking the hamburger button expands the navigation and collapses it', () => {
    const wrapper = setupShallow();
    expect(wrapper.prop('animate')).toBe('collapsed');
    wrapper.find(HamburgerButton).simulate('click');
    expect(wrapper.prop('animate')).toBe('expanded');
    wrapper.find(HamburgerButton).simulate('click');
    expect(wrapper.prop('animate')).toBe('collapsed');
  });

  test('if the navigation is expanded, clicking anywhere outside of the navigation'
    + ' collapses it', () => {
    // mocking listener and setting up wrapper.
    const map: any = {};
    document.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });
    const wrapper = setupMount();

    // nav is collapsed by default
    expect(wrapper.find(motion.nav).prop('animate')).toBe('collapsed');

    // clicking hamburger expands nav.
    wrapper.find(HamburgerButton).simulate('click');
    wrapper.update();
    expect(wrapper.find(motion.nav).prop('animate')).toBe('expanded');

    // clicking outside of nav, while expanded, collapses it.
    act(() => {
      map.mousedown({ target: document.createElement('a') });
    });
    wrapper.update();
    expect(wrapper.find(motion.nav).prop('animate')).toBe('collapsed');
  });
});
