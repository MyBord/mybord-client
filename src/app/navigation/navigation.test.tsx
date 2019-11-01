import * as React from 'react';
import {
  ReactWrapper, ShallowWrapper, mount, shallow,
} from 'enzyme';
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
    const map: { [key: string]: EventListenerOrEventListenerObject } = {};
    document.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });
    document.removeEventListener = jest.fn((event) => {
      delete map[event];
    });
    const wrapper = setupMount();
    expect(typeof map.mousedown).toBe('function');
    wrapper.unmount();
    expect(map.mousedown).toBeUndefined();
  });

  test('event listener is removed on unmount', () => {
  });
});

describe('functionality', () => {
  test('clicking the hamburger button expands the navigation by default', () => {
  });

  test('clicking the hamburger button while the navigation is collapsed expands the navigation', () => {
  });

  test('clicking the hamburger button while the navigation is expanded collapses the navigation', () => {

  });

  test('if the navigation is collapsed, clicking anywhere outside of the navigation keeps it collapsed', () => {
  });

  test('if the navigation is expanded, clicking anywhere outside of the navigation collapses it', () => {
  });
});
