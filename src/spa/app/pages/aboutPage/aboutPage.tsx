import * as React from 'react';
import AboutForUsers from 'about/aboutForUsers/aboutForUsers';
import Footer from 'shared/footer/footer';
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
