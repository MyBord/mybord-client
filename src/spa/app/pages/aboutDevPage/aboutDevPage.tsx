import * as React from 'react';
import Typography from 'typography/typography';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import laptop from 'assets/laptop.jpg';
import { loremIpsumLong } from 'utils/loremIpsum';
import * as styles from './aboutDevPage.module.less';

const AboutDevPage: React.FC = () => (
  <section className={styles.parentSection}>
    <section className={styles.section}>
      <section className={styles.paragraphSection}>
        <div className={styles.paragraphDiv}>
          <Typography text={loremIpsumLong} />
        </div>
        <img alt="laptop" className={styles.img} src={laptop} />
      </section>
    </section>
  </section>
);

export default pageWrapper({ Component: AboutDevPage });
