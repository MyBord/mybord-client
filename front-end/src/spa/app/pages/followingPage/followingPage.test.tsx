import * as React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import FollowingPage from './followingPage';

const setup = (): ReactWrapper => mount(<FollowingPage />);

describe('basic rendering', () => {
  test('page renders', () => {
    expect(setup().length).toBe(1);
  });
});
