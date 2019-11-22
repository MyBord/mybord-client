import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NavigationButton from './navigationButton';

const NavigationButtonExamples: React.FC = () => (
  <MemoryRouter initialEntries={['/bar']}>
    <NavigationButton iconName="chart" label="Trending" to="foo" />
  </MemoryRouter>
);

export default NavigationButtonExamples;
