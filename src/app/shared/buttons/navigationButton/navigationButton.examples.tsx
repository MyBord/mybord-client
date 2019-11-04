import * as React from 'react';
import * as styles from 'storybook/storybook.module.scss';
import { MemoryRouter } from 'react-router-dom';
import NavigationButton from './navigationButton';

const NavigationButtonExamples: React.FC = () => (
  <MemoryRouter>
    <div className={styles.examplesDivList}>
      <h3 className={styles.h3}>Default</h3>
      <NavigationButton iconName="chart" label="Trending" to="foo" />
      <h3 className={styles.h3}>Active (on current page)</h3>
      <NavigationButton active iconName="chart" label="Trending" to="foo" />
    </div>
  </MemoryRouter>
);

export default NavigationButtonExamples;
