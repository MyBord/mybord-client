import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Header from './header';

const setup = (): ShallowWrapper => shallow(<Header />);

describe('basic rendering', () => {
  test('component renders', () => {
    expect(setup().length).toBe(1);
  });
});
