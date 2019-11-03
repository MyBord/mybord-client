import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Header from 'header/header';
import Navigation from 'navigation/navigation';
import Routes from 'pages/routes';
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

  test('Routes renders', () => {
    expect(wrapper.find(Routes).length).toBe(1);
  });

  test('Navigation renders', () => {
    expect(wrapper.find(Navigation).length).toBe(1);
  });
});
