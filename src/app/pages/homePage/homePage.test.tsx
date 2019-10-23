import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import HomePage from './homePage';

const setup = (): ShallowWrapper => shallow(<HomePage />);

describe('basic rendering', () => {
  test('component renders', () => {
    expect(setup().length).toBe(1);
  });
});
