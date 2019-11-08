import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ShallowWrapper, shallow } from 'enzyme';
import PageIndicator from './pageIndicator';

const setup = (): ShallowWrapper => shallow(
  <MemoryRouter>
    <PageIndicator />
  </MemoryRouter>,
);

describe('basic rendering', () => {
  test('component renders', () => {
    expect(setup().length).toBe(1);
  });
});
