import * as React from 'react';
import Navigation from './navigation';
import * as styles from './navigation.demo.module.scss';

const NavigationDemo: React.FC = () => (
  <div className={styles.div}>
    <Navigation />
  </div>
);

export default NavigationDemo;
