import * as React from 'react';
import Typography from 'typography/typography';
import laptop from 'assets/pictures/laptop.jpg';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import { loremIpsumLong } from 'utils/loremIpsum';
import AboutDevStack from './aboutDevStack/aboutDevStack';
import * as styles from './aboutDevPage.module.less';

const AboutDevPage: React.FC = () => (
  <section className={styles.parentSection}>
    <section className={styles.section}>
      <section className={styles.paragraphSection}>
        <div className={styles.paragraphDiv} id="p-1">
          <Typography text={loremIpsumLong} textAlign="justify" />
        </div>
        <img alt="laptop" className={styles.img} src={laptop} />
      </section>
      <section className={styles.paragraphSection} id="p-2">
        <img alt="laptop" className={styles.img} src={laptop} />
        <div className={styles.paragraphDiv}>
          <Typography text={loremIpsumLong} textAlign="justify" />
        </div>
      </section>
      <AboutDevStack />
    </section>
  </section>
);

export default pageWrapper({ Component: AboutDevPage });
