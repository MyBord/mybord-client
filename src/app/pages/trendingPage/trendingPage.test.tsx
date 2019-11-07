import * as React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import TrendingPage from './trendingPage';

const setup = (): ReactWrapper => mount(<TrendingPage />);

describe('basic rendering', () => {
  test('page renders', () => {
    expect(setup().length).toBe(1);
  });
});
