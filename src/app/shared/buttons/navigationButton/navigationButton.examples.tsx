import * as React from 'react';
import * as styles from 'storybook/storybook.module.scss';
import NavigationButton from './navigationButton';

const NavigationButtonExamples: React.FC = () => (
  <div className={styles.examplesDivList}>
    <h3 className={styles.h3}>Default</h3>
    <NavigationButton iconName="chart" label="Trending" />
    <h3 className={styles.h3}>Active (on current page)</h3>
    <NavigationButton active iconName="chart" label="Trending" />
  </div>
);

export default NavigationButtonExamples;
