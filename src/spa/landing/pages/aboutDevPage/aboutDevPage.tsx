import * as React from 'react';
import AboutDevDescription from 'pages/aboutDevPage/aboutDevDescription/aboutDevDescription';
import AboutDevStack from 'pages/aboutDevPage/aboutDevStack/aboutDevStack';
import AboutPageHeader from 'header/pageHeaders/aboutPageHeader/aboutPageHeader';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';
import * as styles from './aboutDevPage.module.less';

const AboutDevPage: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.divHeader}>
      <AboutPageHeader />
    </div>
    <AboutDevDescription />
    <AboutDevStack />
  </section>
);

export default pageWrapper(AboutDevPage);
