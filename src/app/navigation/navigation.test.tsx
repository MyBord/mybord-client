import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Navigation from './navigation';

const setup = (): ShallowWrapper => shallow(<Navigation />);

describe('basic rendering', () => {
  test('component renders', () => {
    expect(setup().length).toBe(1);
  });
});
