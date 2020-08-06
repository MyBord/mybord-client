import * as React from 'react';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import AboutDescription from './aboutDescription/aboutDescription';
import * as styles from './aboutPage.module.less';

const AboutPage: React.FC = () => (
  <section className={styles.parentSection}>
    <section className={styles.section}>
      <AboutDescription />
    </section>
  </section>
);

export default pageWrapper({ Component: AboutPage });
