import * as React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import DashboardPage from './dashboardPage';

const setup = (): ReactWrapper => mount(<DashboardPage />);

describe('basic rendering', () => {
  test('page renders', () => {
    expect(setup().length).toBe(1);
  });
});
