import * as React from 'react';
import NavigationButton from './navigationButton/navigationButton';
import PageIndicator from '../pageIndicator/pageIndicator';
import * as styles from './navigationButtons.module.scss';

const NavigationButtons: React.FC = () => (
  <section className={styles.section}>
    {/* <PageIndicator /> */}
    <NavigationButton
      iconName="thumbsUp"
      link="myBord"
    />
    <NavigationButton
      iconName="thumbsUp"
      link="/trending"
    />
    <NavigationButton
      iconName="thumbsUp"
      link="/following"
    />
  </section>
);

export default NavigationButtons;
