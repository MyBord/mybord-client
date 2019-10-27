import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import HamburgerButton from './hamburgerButton';

const setup = (): ShallowWrapper => shallow(
  <HamburgerButton onClick={() => {}} />,
);

describe('basic rendering', () => {
  test('Lottie component renders', () => {
    expect(setup().length).toBe(1);
  });
});
