import * as React from 'react';
import Footer from 'shared/footer/footer';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import AboutDevDescription from './aboutDevDescription/aboutDevDescription';
import AboutDevStack from './aboutDevStack/aboutDevStack';
import * as styles from './aboutDevPage.module.less';

const AboutDevPage: React.FC = () => (
  <section className={styles.parentSection}>
    <section className={styles.section}>
      <AboutDevDescription />
      <AboutDevStack />
      <Footer />
    </section>
  </section>
);

export default pageWrapper({ Component: AboutDevPage });
