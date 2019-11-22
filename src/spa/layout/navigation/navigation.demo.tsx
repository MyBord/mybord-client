import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './navigation';
import * as styles from './navigation.demo.module.scss';

const NavigationDemo: React.FC = () => (
  <MemoryRouter>
    <div className={styles.div}>
      <Navigation />
    </div>
  </MemoryRouter>
);

export default NavigationDemo;
