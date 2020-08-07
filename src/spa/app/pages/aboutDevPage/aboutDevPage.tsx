import * as React from 'react';
import Footer from 'shared/footer/footer';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import AboutForDevs from 'about/aboutForDevs/aboutForDevs';
import * as styles from './aboutDevPage.module.less';

const AboutDevPage: React.FC = () => (
  <section className={styles.parentSection}>
    <section className={styles.section}>
      <AboutForDevs />
      <Footer isApp />
    </section>
  </section>
);

export default pageWrapper({ Component: AboutDevPage });
