import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Spa from './spa';

const setup = (): ShallowWrapper => shallow(<Spa />);

describe('basic rendering', () => {
  test('component renders', () => {
    expect(setup().length).toBe(1);
  });
});

// ToDo: add these tests
// - nav renders
// - main renders
// - header renders
// - app / routes renders
