import * as React from 'react';
import Footer from 'footer/footer';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import AboutForDevs from 'copy/aboutForDevs/aboutForDevs';
import AboutStack from 'copy/aboutStack/aboutStack';
import * as styles from './aboutDevPage.module.less';

const AboutDevPage: React.FC = () => (
  <section className={styles.parentSection}>
    <section className={styles.section}>
      <AboutForDevs />
      <AboutStack />
      <Footer isApp />
    </section>
  </section>
);

export default pageWrapper({ Component: AboutDevPage });
