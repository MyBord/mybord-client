import * as React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import CantPage from './cantPage';

const setup = (): ReactWrapper => mount(<CantPage />);

describe('basic rendering', () => {
  test('page renders', () => {
    expect(setup().length).toBe(1);
  });
});
