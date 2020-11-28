import * as React from 'react';
import AboutForUsers from 'copy/aboutForUsers/aboutForUsers';
import Footer from 'footer/footer';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import * as styles from './aboutPage.module.less';

const AboutPage: React.FC = () => (
  <section className={styles.parentSection}>
    <section className={styles.section}>
      <AboutForUsers />
      <Footer isApp />
    </section>
  </section>
);

export default pageWrapper({ Component: AboutPage });
