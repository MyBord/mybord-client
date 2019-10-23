import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Header from 'header/header';
import HomePage from 'pages/homePage/homePage';
import Navigation from 'navigation/navigation';
import Spa from './spa';

const setup = (): ShallowWrapper => shallow(<Spa />);

describe('basic rendering', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test('component renders', () => {
    expect(wrapper.length).toBe(1);
  });

  test('Header renders', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  test('HomePage renders', () => {
    expect(wrapper.find(HomePage).length).toBe(1);
  });

  test('Navigation renders', () => {
    expect(wrapper.find(Navigation).length).toBe(1);
  });
});
