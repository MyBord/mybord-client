import * as React from 'react';
import AboutDevDescription from 'pages/aboutDevPage/aboutDevDescription/aboutDevDescription';
import AboutDevStack from 'pages/aboutDevPage/aboutDevStack/aboutDevStack';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';
import * as styles from './aboutDevPage.module.less';

const AboutDevPage: React.FC = () => (
  <section className={styles.section}>
    <AboutDevDescription />
    <AboutDevStack />
  </section>
);

export default pageWrapper(AboutDevPage);
