import * as React from 'react';
import Footer from 'shared/footer/footer';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import AboutDescription from './aboutDescription/aboutDescription';
import * as styles from './aboutPage.module.less';

const AboutPage: React.FC = () => (
  <section className={styles.parentSection}>
    <section className={styles.section}>
      <AboutDescription />
      <Footer />
    </section>
  </section>
);

export default pageWrapper({ Component: AboutPage });
